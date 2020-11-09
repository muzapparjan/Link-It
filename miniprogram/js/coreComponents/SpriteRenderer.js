/**
 * SpriteRenderer.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"

/** 图片渲染器 */
export default class SpriteRenderer extends Component {
  /**
   * 创建一个新的图片渲染组件
   * @param {Boolean} visibility 是否可见
   * @param {Number} transparency 透明度
   * @param {Number} layer 层级
   */
  constructor(visibility = true, transparency = 1.0, layer = 0) {
    super("SpriteRenderer", true)
    /** 是否可见 */
    this.Visibility = visibility
    /** 透明度 */
    this.Transparency = transparency
    /** 层级（渲染优先级） */
    this.Layer = layer
  }
}