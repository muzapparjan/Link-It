/**
 * System.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 系统类 */
export default class System {
  /**
   * 创建一个新系统
   * @param {String} name 名称
   * @param {Number} priority 优先级
   * @param {Function} matchFunction 匹配函数
   * @param {Function} executionFunction 规则函数
   */
  constructor(name, priority = 0.0, matchFunction = null, executionFunction = null) {
    /** 系统名 */
    this.Name = name
    /** 系统优先级 */
    this.Priority = priority
    /** 匹配函数 */
    this.MatchFunction = matchFunction
    /** 规则函数 */
    this.ExecutionFunction = executionFunction
    /** 已匹配的实体列表 */
    this.MatchedEntities = new Array()
  }
  /**
   * 执行系统规则，迭代更新
   * @param {Number} deltaTime 更新间隔时长
   */
  Execute(deltaTime) {
    this.MatchedEntities.forEach(entity => {
      this.ExecutionFunction(entity, deltaTime)
    });
  }
  /**
   * 尝试匹配实体到规则
   * @param {Entity}} entity 要匹配的实体
   */
  TryMatch(entity) {
    //TODO
  }
}