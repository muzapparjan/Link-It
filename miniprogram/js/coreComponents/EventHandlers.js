/**
 * EventHandlers.js
 * HUST CS1801 Muzappar
 * 2020-11-16
 */

import Component from "../framework/Component"

/** 事件处理器 */
export default class EventHandler extends Component {
  /** 创建一个新的事件处理器 */
  constructor() {
    super("EventHandler", true)
  }
}
/** 开始触屏时的事件处理器 */
export class OnTouchStartHandler extends Component {
  /** 
   * 创建一个新的开始触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OnTouchStartHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 移动触屏时的事件处理器 */
export class OnTouchMoveHandler extends Component {
  /** 
   * 创建一个新的移动触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OnTouchMoveHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 结束触屏时的事件处理器 */
export class OnTouchEndHandler extends Component {
  /** 
   * 创建一个新的结束触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OnTouchEndHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 撤销触屏时的事件处理器 */
export class OnTouchCancelHandler extends Component {
  /** 
   * 创建一个新的撤销触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OnTouchCancelHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 取消开始触屏时的事件处理器 */
export class OffTouchStartHandler extends Component {
  /** 
   * 创建一个新的取消开始触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OffTouchStartHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 取消移动触屏时的事件处理器 */
export class OffTouchMoveHandler extends Component {
  /** 
   * 创建一个新的取消移动触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OffTouchMoveHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 取消结束触屏时的事件处理器 */
export class OffTouchEndHandler extends Component {
  /** 
   * 创建一个新的取消结束触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OffTouchEndHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}
/** 取消撤销触屏时的事件处理器 */
export class OffTouchCancelHandler extends Component {
  /** 
   * 创建一个新的取消撤销触屏时的事件处理器
   * @param {Array<Touch>} touches 当前所有触摸点的列表
   * @param {Array<Touch>} changedTouches 触发此次事件的触摸点列表
   * @param {Number} timeStamp 事件触发时的时间戳
   */
  constructor(touches, changedTouches, timeStamp) {
    super("OffTouchCancelHandler", false)
    /** 当前所有触摸点的列表 */
    this.Touches = touches
    /** 触发此次事件的触摸点列表 */
    this.ChangedTouches = changedTouches
    /** 事件触发时的时间戳 */
    this.TimeStamp = timeStamp
    /** 事件是否已被消费 */
    this.Consumed = false
  }
}