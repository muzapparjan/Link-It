/**
 * Gestures.js
 * HUST CS1801 Muzappar
 * 2020-11-17
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/** 点击手势 */
export class Clicked extends Component {
  /**
   * 创建一个新的点击手势
   * @param {Number} timeStamp 时间戳
   * @param {Number} lifeTime 生命周期
   */
  constructor(timeStamp, lifeTime = 1.0) {
    super("Clicked", true)
    /** 时间戳 */
    this.TimeStamp = timeStamp
    /** 生命周期 */
    this.LifeTime = lifeTime
  }
}

/** 点击手势监测信息 */
export class ClickGestureDetectorInfo {
  constructor(touchID, startPos = new Vector()) {
    this.TouchID = touchID
    this.StartPos = startPos
  }
}

/** 点击手势判断器 */
export class ClickGestureDetector extends Component {
  /** 创建一个新的点击手势判断器 */
  constructor() {
    super("ClickGestureDetector", true)
    /** 监测信息列表
     * @type Array<ClickGestureDetectorInfo>
     */
    this.InfoList = new Array()
  }
}