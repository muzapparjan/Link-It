/**
 * StartButtonSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import LevelGenerator from "../logicalComponents/LevelGenerator"

/** 开始游戏系统 */
export default class StartButtonSystem extends System {
  /** 创建一个新的开始游戏系统 */
  constructor() {
    super("StartButtonSystem", 0, StartButtonSystem.MatchFunction, StartButtonSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("StartButton") && entity.CheckComponentByName("Clicked")
  }
  /**
   * 系统规则：当开始游戏按钮被点击时删除按钮和标题，进入关卡
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    this.CommandBuffer.push(() => {
      GameGlobal.Level = 1
      GameGlobal.Score = 0
      let levelGeneratorEntity = entity.World.CreateEntity()
      levelGeneratorEntity.AddComponent(new LevelGenerator())
      entity.World.RemoveEntity(entity)
    })
  }
}