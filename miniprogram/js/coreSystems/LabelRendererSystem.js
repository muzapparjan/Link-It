/**
 * LabelRendererSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import System from "../framework/System"
import Vector from "../util/Vector"

/** 标签渲染系统 */
export default class LabelRendererSystem extends System {
  /** 创建一个新的标签渲染系统 */
  constructor() {
    super("LabelRendererSystem", -10.0, LabelRendererSystem.MatchFunction, LabelRendererSystem.ExecutionFunction, true)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("Label") && entity.CheckComponentByName("Transform")
  }
  /**
   * 系统规则：根据标签与变换数据渲染文本到画布
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let label = entity.GetComponentByName("Label")
    let transform = entity.GetComponentByName("Transform")
    GameGlobal.Context.save()
    GameGlobal.Context.globalAlpha = 1
    let deltaV = new Vector(-transform.Scale.x * transform.Pivot.x, -transform.Scale.y * transform.Pivot.y)
    GameGlobal.Context.translate(deltaV.x, deltaV.y)
    if (label.Font != null)
      GameGlobal.Context.font = label.Font
    GameGlobal.Context.fillText(label.Text, transform.Position.x, transform.Position.y)
    GameGlobal.Context.restore()
  }
}