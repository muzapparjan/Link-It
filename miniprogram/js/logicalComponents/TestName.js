/**
 * TestName.js
 * HUST CS1801 Muzappar
 * 2020-11-18
 */

import Component from "../framework/Component"

/** 测试名称组件 */
export default class TestName extends Component {
  /**
   * 创建一个新的测试名称组件
   * @param {String} name 名称
   */
  constructor(name = "") {
    super("TestName", true)
    this.Name = name
  }
}