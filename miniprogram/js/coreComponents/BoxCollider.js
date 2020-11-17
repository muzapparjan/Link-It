/**
 * BoxCollider.js
 * HUST CS1801 Muzappar
 * 2020-11-9
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/** 方形碰撞器 */
export default class BoxCollider extends Component {
  /** 
   * 创建一个新的方形碰撞器
   * @param {Vector} centerBias 中心偏移
   * @param {Vector} size 宽高
   */
  constructor(centerBias = new Vector(), scale = new Vector(1, 1)) {
    super("BoxCollider", true)
    /** 中心偏移 */
    this.CenterBias = centerBias
    /** 缩放系数 */
    this.Scale = scale
  }
}