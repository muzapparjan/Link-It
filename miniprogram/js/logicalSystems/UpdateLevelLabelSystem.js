/**
 * UpdateLevelLabelSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 更新关卡标签系统 */
export default class UpdateLevelLabelSystem extends System {
  /** 创建一个新的更新关卡标签系统 */
  constructor() {
    super("UpdateLevelLabelSystem", 0, UpdateLevelLabelSystem.MatchFunction, UpdateLevelLabelSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("LevelLabel") && entity.CheckComponentByName("Label")
  }
  /**
   * 系统规则：根据关卡信息更新关卡标签
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let label = entity.GetComponentByName("Label")
    label.Text = GameGlobal.Level.toString()
  }
}