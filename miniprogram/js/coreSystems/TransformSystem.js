/**
 * TransformSystem.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"

/** 变换系统 */
export default class TransformSystem extends System {
  /** 创建一个新的变换系统 */
  constructor() {
    super("TransformSystem", 0.0, TransformSystem.MatchFunction, TransformSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("Transform") && entity.CheckComponentByName("Transformer")
  }
  /**
   * 系统规则：根据变换触发器的数据更新变换组件，并移除变换触发器
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let transform = (entity.GetComponentByName("Transform"))
    let transformer = entity.GetComponentByName("Transformer")
    if (transform == null || transformer == null)
      return
    transform.Position = Vector.Add(transform.Position, transformer.Move)
    transform.Rotation = transform.Rotation + transformer.Rotate
    transform.Scale = new Vector(transform.Scale.x * transformer.Scale.x, transform.Scale.y * transformer.Scale.y)
    transform.Pivot = Vector.Add(transform.Pivot, transformer.MovePivot)
    this.CommandBuffer.push(() => {
      entity.RemoveComponent(transformer)
    })
  }
}