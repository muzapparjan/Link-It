/**
 * Transform.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/**
 * 变换组件
 */
export default class Transform extends Component {
  /**
   * 创建一个新的变换组件
   * @param {Vector} position 坐标
   * @param {Number} rotation 角度
   * @param {Vector} scale 大小
   * @param {Vector} pivot 锚点
   */
  constructor(position = new Vector(), rotation = 0, scale = new Vector(1, 1), pivot = new Vector(0.5, 0.5)) {
    super("Transform", true)
    /** 坐标 */
    this.Position = position
    /** 旋转角度 */
    this.Rotation = rotation
    /** 缩放大小 */
    this.Scale = scale
    /** 锚点 */
    this.Pivot = pivot
  }
}