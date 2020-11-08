/**
 * TestLogger.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import Component from "../framework/Component"

/** 测试打印日志组件 */
export default class TestLogger extends Component {
  /**
   * 创建一个新的测试打印日志组件
   * @param {String} message 要打印的消息
   */
  constructor(message = "") {
    super("TestLogger", true)
    this.Message = message
  }
}