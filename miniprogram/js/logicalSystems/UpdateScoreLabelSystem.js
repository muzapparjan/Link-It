/**
 * UpdateScoreLabelSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 更新分数标签系统 */
export default class UpdateScoreLabelSystem extends System {
  /** 创建一个新的更新分数标签系统 */
  constructor() {
    super("UpdateScoreLabelSystem", 0, UpdateScoreLabelSystem.MatchFunction, UpdateScoreLabelSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("ScoreLabel") && entity.CheckComponentByName("Label")
  }
  /**
   * 系统规则：根据关卡信息更新关卡标签
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let label = entity.GetComponentByName("Label")
    label.Text = GameGlobal.Score.toString()
  }
}