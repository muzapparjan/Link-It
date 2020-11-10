/**
 * OrthographicRay.js
 * HUST CS1801 Muzappar
 * 2020-11-9
 */

import Vector from "./Vector"

/** 正交射线 */
export default class OrthographicRay {
  /**
   * 创建一个新的正交射线
   * @param {Vector} origin 起点
   * @param {Number} maxDepth 最大深度
   */
  constructor(origin = new Vector(), maxDepth = 100) {
    /** 起点 */
    this.Origin = origin
    /** 最大深度 */
    this.MaxDepth = maxDepth
  }
}