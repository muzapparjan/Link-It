/**
 * Label.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import Component from "../framework/Component"

/** 标签 */
export default class Label extends Component {
  /** 
   * 创建一个新的标签
   * @param {String} text 文字内容
   */
  constructor(text,font=null) {
    super("Label", true)
    /** 文字内容 */
    this.Text = text
    /** 字体 */
    this.Font=font
  }
}