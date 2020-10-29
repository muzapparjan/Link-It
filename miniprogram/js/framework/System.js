/**
 * System.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 系统类 */
export default class System {
  /**
   * 创建一个新系统
   * @param {String} name 系统名称
   * @param {Number} priority 系统优先级
   */
  constructor(name, priority) {
    /** 系统名 */
    this.Name = name
    /** 系统优先级 */
    this.Priority = priority
  }
  /**
   * 执行系统规则，迭代更新
   * @param {Number} deltaTime 更新间隔时长
   */
  Execute(deltaTime) {
    //TODO
  }
}