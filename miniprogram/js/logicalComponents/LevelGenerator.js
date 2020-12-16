/**
 * LevelGenerator.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import Component from "../framework/Component"

/** 创建关卡组件 */
export default class LevelGenerator extends Component {
  /**
   * 创建一个新的创建关卡组件
   * @param {Number} level 关卡等级
   */
  constructor(level = 1) {
    super("LevelGenerator", true)
    /** 关卡等级 */
    this.Level = level
  }
}