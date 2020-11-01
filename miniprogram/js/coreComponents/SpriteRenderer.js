/**
 * SpriteRenderer.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"

/**
 * 图片渲染组件
 */
export default class SpriteRenderer extends Component {
  /**
   * 创建一个新的图片渲染组件
   * @param {Boolean} visibility 是否可见
   * @param {Number} transparency 透明度
   */
  constructor(visibility = true, transparency = 1.0) {
    super("SpriteRenderer", true)
    this.Visibility = visibility
    this.Transparency = transparency
  }
}