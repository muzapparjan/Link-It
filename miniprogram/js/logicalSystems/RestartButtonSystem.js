/**
 * RestartButtonSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import LevelGenerator from "../logicalComponents/LevelGenerator"

/** 重新开始游戏系统 */
export default class RestartButtonSystem extends System {
  /** 创建一个新的重新开始游戏系统 */
  constructor() {
    super("RestartButtonSystem", 0, RestartButtonSystem.MatchFunction, RestartButtonSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("RestartButton") && entity.CheckComponentByName("Clicked")
  }
  /**
   * 系统规则：删除所有残存的砖块，创建新关卡
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    this.CommandBuffer.push(() => {
      GameGlobal.Level = 1
      GameGlobal.Score = 0
      let tiles = entity.World.FindEntitiesByRequiredComponentName("SelectableTile")
      if (tiles != null)
        tiles.forEach(tile => {
          entity.World.RemoveEntity(tile)
        })
      let levelGeneratorEntity = entity.World.CreateEntity()
      levelGeneratorEntity.AddComponent(new LevelGenerator())
      entity.RemoveComponentByName("Clicked")
    })
  }
}