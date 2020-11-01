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
  constructor(position = new Vector(), rotation = 0.0, scale = new Vector(1.0, 1.0), pivot = new Vector(0.5, 0.5)) {
    super("Transform", true)
    this.Position = position
    this.Rotation = rotation
    this.Scale = scale
    this.Pivot = pivot
  }
}