/**
 * SpriteProvider.js
 * HUST CS1801 Muzappar
 * 2020-10-30
 */

import Component from "../framework/Component"

/** 图片提供者组件 */
export default class SpriteProvider extends Component {
  constructor() {
    super("SpriteProvider", true)
    this.SpriteList = new Array()
    this.TargetSpriteIndex = 0
  }
}