/**
 * TestLoggerSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 测试打印日志系统 */
export default class TestLoggerSystem extends System {
  /** 创建一个新的测试打印日志系统 */
  constructor() {
    super("TestLoggerSystem", 0.0, TestLoggerSystem.MatchFunction, TestLoggerSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("TestLogger")
  }
  /**
   * 系统规则：打印消息并移除日志组件
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let testLogger = entity.GetComponentByName("TestLogger")
    if (testLogger == undefined || testLogger == null)
      return
    console.log(testLogger.Message)
    this.CommandBuffer.push(() => {
      entity.RemoveComponent(testLogger)
    })
  }
}