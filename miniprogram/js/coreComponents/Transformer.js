/**
 * Transformer.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/** 变换触发器 */
export default class Transformer extends Component {
  /**
   * 创建一个新的变换触发器
   * @param {Vector} move 相对移动距离
   * @param {Number} rotate 相对旋转角度
   * @param {Vector} scale 相对缩放系数
   * @param {Vector} movePivot 相对锚点移动距离
   */
  constructor(move = new Vector(), rotate = 0.0, scale = new Vector(1.0, 1.0), movePivot = new Vector()) {
    super("Transformer", false)
    this.Move = move
    this.Rotate = rotate
    this.Scale = scale
    this.MovePivot = movePivot
  }
}