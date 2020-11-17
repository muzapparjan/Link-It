/**
 * TestLogNameSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-18
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 测试打印名称系统 */
export default class TestLogNameSystem extends System {
  /** 创建一个新的测试打印名称系统 */
  constructor() {
    super("TestLogNameSystem", 0.0, TestLogNameSystem.MatchFunction, TestLogNameSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("TestName") && entity.CheckComponentByName("Clicked")
  }
  /**
   * 系统规则：打印名称并移除点击组件
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let testName = entity.GetComponentByName("TestName")
    let clicked = entity.GetComponentByName("Clicked")
    console.log("你刚刚点击了", testName.Name)
    this.CommandBuffer.push(() => {
      entity.RemoveComponent(clicked)
    })
  }
}