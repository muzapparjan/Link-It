/**
 * TileSelectionSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-07
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"
import SelectableTile from "../logicalComponents/SelectableTile"

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
    } else {
      let success = true
      //TODO

      if (success) {
        this.CommandBuffer.push(() => {
          let world = entity.World
          world.RemoveEntity(entity)
          world.RemoveEntity(selectedTileEntities[0])
        })
        return
      }
    }
    this.CommandBuffer.push(() => {
      entity.RemoveComponentByName("Clicked")
    })
  }
}