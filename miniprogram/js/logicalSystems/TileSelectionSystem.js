/**
 * TileSelectionSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-07
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"
import SelectableTile from "../logicalComponents/SelectableTile"
import LevelGenerator from "../logicalComponents/LevelGenerator"

/** 砖块选择系统 */
export default class TileSelectionSystem extends System {
  /** 创建一个新的砖块选择系统 */
  constructor() {
    super("TileSelectionSystem", 50.0, TileSelectionSystem.MatchFunction, TileSelectionSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("SelectableTile") && entity.CheckComponentByName("Clicked")
  }
  /**
   * 系统规则：根据点击信息设置砖块是否被点击
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let selectableTile = entity.GetComponentByName("SelectableTile")
    let selectableTileEntities = entity.World.FindEntitiesByRequiredComponentName("SelectableTile")
    let map = new Array()
    for (let i = 0; i < SelectableTile.ColumnCount; i++) {
      let column = new Array()
      for (let j = 0; j < SelectableTile.RowCount; j++)
        column.push(0)
      map.push(column)
    }
    for (let i = 0; i < map.length; i++)
      for (let j = 0; j < map[i].length; j++)
        map[i][j] = 0
    let selectedTileEntities = new Array()
    selectableTileEntities.forEach(selectableTileEntity => {
      let tileInfo = selectableTileEntity.GetComponentByName("SelectableTile")
      map[tileInfo.Column] = tileInfo.TileType
      if (tileInfo.Selected)
        selectedTileEntities.push(selectableTileEntity)
    })
    if (selectedTileEntities.length == 0) {
      selectableTile.Selected = true
    }
    else if (selectedTileEntities[0] == entity) {
      selectableTile.Selected = false
    } else {
      let success = true
      let lastSelectedTile = selectedTileEntities[0].GetComponentByName("SelectableTile")
      if (selectableTile.TileType != lastSelectedTile.TileType) {
        success = false
        selectableTile.Selected = true
        lastSelectedTile.Selected = false
      } else {
        let binaryMap = new Array()
        for (let i = 0; i < SelectableTile.ColumnCount + 2; i++) {
          binaryMap.push(new Array())
          for (let j = 0; j < SelectableTile.RowCount + 2; j++) {
            binaryMap[i].push(0)
          }
        }
        selectableTileEntities.forEach(selectableTileEntity => {
          let tileInfo = selectableTileEntity.GetComponentByName("SelectableTile")
          binaryMap[tileInfo.Column + 1][tileInfo.Row + 1] = 1
        })
        let start = new Vector(selectableTile.Column + 1, selectableTile.Row + 1)
        let end = new Vector(lastSelectedTile.Column + 1, lastSelectedTile.Row + 1)
        if (!TileSelectionSystem.MatchLine(binaryMap, start, end))
          if (!TileSelectionSystem.MatchSingle(binaryMap, start, end))
            if (!TileSelectionSystem.MatchDouble(binaryMap, start, end)) {
              success = false
              selectableTile.Selected = true
              lastSelectedTile.Selected = false
            }
      }
      if (success) {
        this.CommandBuffer.push(() => {
          GameGlobal.Score += 1
          let world = entity.World
          world.RemoveEntity(entity)
          world.RemoveEntity(selectedTileEntities[0])
          let tiles = world.FindEntitiesByRequiredComponentName("SelectableTile")
          if (tiles == null) {
            GameGlobal.Level++
            let levelGeneratorEntity = world.CreateEntity()
            levelGeneratorEntity.AddComponent(new LevelGenerator())
          }
        })
        return
      }
    }
    this.CommandBuffer.push(() => {
      entity.RemoveComponentByName("Clicked")
    })
  }

  static MatchLine(binaryMap, start, end) {
    if (start.x == end.x) {
      for (let i = Math.min(start.y, end.y) + 1; i < Math.max(start.y, end.y); i++)
        if (binaryMap[start.x][i] == 1)
          return false
      return true
    }
    if (start.y == end.y) {
      for (let i = Math.min(start.x, end.x) + 1; i < Math.max(start.x, end.x); i++)
        if (binaryMap[i][start.y] == 1)
          return false
      return true
    }
    return false
  }
  static MatchSingle(binaryMap, start, end) {
    let M = new Vector(start.x, end.y)
    let N = new Vector(end.x, start.y)
    if (TileSelectionSystem.MatchLine(binaryMap, start, M) && TileSelectionSystem.MatchLine(binaryMap, end, M) && binaryMap[M.x][M.y] == 0)
      return true
    if (TileSelectionSystem.MatchLine(binaryMap, start, N) && TileSelectionSystem.MatchLine(binaryMap, end, N) && binaryMap[N.x][N.y] == 0)
      return true
    return false
  }
  static MatchDouble(binaryMap, start, end) {
    let possiblePoints = new Array()
    for (let i = start.x + 1; i < binaryMap.length; i++) {
      if (binaryMap[i][start.y] == 1)
        break
      possiblePoints.push(new Vector(i, start.y))
    }
    for (let i = start.x - 1; i >= 0; i--) {
      if (binaryMap[i][start.y] == 1)
        break
      possiblePoints.push(new Vector(i, start.y))
    }
    for (let i = start.y + 1; i < binaryMap[0].length; i++) {
      if (binaryMap[start.x][i] == 1)
        break
      possiblePoints.push(new Vector(start.x, i))
    }
    for (let i = start.y - 1; i >= 0; i--) {
      if (binaryMap[start.x][i] == 1)
        break
      possiblePoints.push(new Vector(start.x, i))
    }
    for (let i = 0; i < possiblePoints.length; i++) {
      if (TileSelectionSystem.MatchSingle(binaryMap, possiblePoints[i], end))
        return true
    }
    return false
  }
}