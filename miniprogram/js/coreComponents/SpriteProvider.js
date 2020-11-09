/**
 * SpriteProvider.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"

/** 图片提供器 */
export default class SpriteProvider extends Component {
  /** 创建一个新的图片提供器 */
  constructor() {
    super("SpriteProvider", true)
    /** 图片列表 */
    this.SpriteList = new Array()
    /** 当前要显示的图片索引 */
    this.TargetSpriteIndex = 0
  }
}