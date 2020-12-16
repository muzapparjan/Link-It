/**
 * LevelGenerationSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"
import LevelGenerator from "../logicalComponents/LevelGenerator"
import SelectableTile from "../logicalComponents/SelectableTile"
import Transform from "../coreComponents/Transform"
import SpriteRenderer from "../coreComponents/SpriteRenderer"
import SpriteProvider from "../coreComponents/SpriteProvider"
import SpriteRequest from "../coreComponents/SpriteRequest"
import { ClickGestureDetector } from "../coreComponents/Gestures"
import BoxCollider from "../coreComponents/BoxCollider"

/** 关卡创建系统 */
export default class LevelGenerationSystem extends System {
  /** 创建一个新的关卡创建系统 */
  constructor() {
    super("LevelGenerationSystem", 0, LevelGenerationSystem.MatchFunction, LevelGenerationSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("LevelGenerator")
  }
  /**
   * 系统规则：根据关卡信息生成对应的关卡
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let levelGenerator = entity.GetComponentByName("LevelGenerator")
    this.CommandBuffer.push(() => {
      let possiblePosList = new Array()
      for (let i = 0; i < SelectableTile.ColumnCount; i++)
        for (let j = 0; j < SelectableTile.RowCount; j++)
          possiblePosList.push(new Vector(i, j))
      possiblePosList.sort((a, b) => {
        return Math.random() - 0.5
      })
      for (let i = 0; i + 1 < possiblePosList.length; i += 2) {
        let tileType = 0
        if (levelGenerator.Level <= 5)
          tileType = Math.floor((Math.random() * 10))
        else if (levelGenerator.Level <= 10)
          tileType = Math.floor((Math.random() * 15))
        else if (levelGenerator.Level <= 20)
          tileType = Math.floor((Math.random() * 25))
        else
          tileType = Math.floor((Math.random() * 49))
        for (let j = i; j < i + 2; j++) {
          let tile = entity.World.CreateEntity()
          tile.AddComponent(new Transform(new Vector(), 0, new Vector(), new Vector(0.5, 0.5)))
          tile.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
          tile.AddComponent(new SpriteProvider())
          tile.AddComponent(new SpriteRequest("images/TileSet.png", new Vector(72 * (tileType % 7), 72 * Math.floor(tileType / 7)), new Vector(72, 72), true))
          tile.AddComponent(new ClickGestureDetector())
          tile.AddComponent(new BoxCollider())
          tile.AddComponent(new SelectableTile(tileType, possiblePosList[j].x, possiblePosList[j].y))
        }
      }
      entity.World.RemoveEntity(entity)
    })
  }
}