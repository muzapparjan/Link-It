/**
 * TouchEventHandler.js
 * HUST CS1801 Muzappar
 * 2020-11-9
 */

import Component from "../framework/Component"

/** 触屏事件处理器 */
export default class TouchEventHandler extends Component {
  /**
   * 创建一个新的事件处理器
   * @param {Boolean} enabled 是否接收事件
   * @param {Function} onTouchStart 监听开始触摸事件回调
   * @param {Function} onTouchMove 监听触点移动事件回调
   * @param {Function} onTouchEnd 监听触摸结束事件回调
   * @param {Function} onTouchCancel 监听触点失效事件回调
   * @param {Function} offTouchStart 取消监听开始触摸事件回调
   * @param {Function} offTouchMove 取消监听触点移动事件回调
   * @param {Function} offTouchEnd 取消监听触摸结束事件回调
   * @param {Function} offTouchCancel 取消监听触点失效事件灰陶
   */
  constructor(enabled = true, onTouchStart = null, onTouchMove = null, onTouchEnd = null, onTouchCancel = null, offTouchStart = null, offTouchMove = null, offTouchEnd = null, offTouchCancel = null) {
    super("TouchEventHandler", true)
    this.Enabled = enabled
    this.OnTouchStart = onTouchStart
    this.OnTouchMove = onTouchMove
    this.OnTouchEnd = onTouchEnd
    this.onTouchCancel = onTouchCancel
    this.OffTouchStart = offTouchStart
    this.OffTouchMove = offTouchMove
    this.OffTouchEnd = offTouchEnd
    this.OffTouchCancel = offTouchCancel
  }
}