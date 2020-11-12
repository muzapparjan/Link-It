/**
 * TouchEventHandlerSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-12
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import TouchEventHandler from "../coreComponents/TouchEventHandler"

/** 触屏事件管理器系统 */
export default class TouchEventHandlerSystem extends System {
  /** 创建一个新的触屏事件管理器系统系统 */
  constructor() {
    super("TouchEventHandlerSystem", 100.0, TouchEventHandlerSystem.MatchFunction, TouchEventHandlerSystem.ExecutionFunction, false, null, true, TouchEventHandlerSystem.MessageMatchFunction, TouchEventHandlerSystem.OnAddTouchEventHandler, TouchEventHandlerSystem.OnRemoveTouchEventHandler)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("TouchEventHandler")
  }
  /** 系统规则：无 */
  static ExecutionFunction(entity, deltaTime) {
  }
  /**
   * 消息匹配函数
   * @param {Entity} entity 要匹配的实体
   * @param {String} keyWord 关键字
   * @param  {...any} messages 消息列表
   */
  static MessageMatchFunction(entity, keyWord, ...messages) {
    return messages.length > 0 && messages[0].Name == "TouchEventHandler"
  }
  /**
   * 实体添加触屏事件管理器时的回调
   * @param {Entity} entity 改动的实体
   * @param {TouchEventHandler} touchEventHandler 触屏事件管理器
   */
  static OnAddTouchEventHandler(entity, touchEventHandler) {
    let callbackIndex = GameGlobal.TouchEventHandlers.indexOf(touchEventHandler)
    if (callbackIndex == -1)
      GameGlobal.TouchEventHandlers.push(touchEventHandler)
  }
  /**
 * 实体移除触屏事件管理器时的回调
 * @param {Entity} entity 改动的实体
 * @param {TouchEventHandler} touchEventHandler 触屏事件管理器
 */
  static OnRemoveTouchEventHandler(entity, touchEventHandler) {
    let callbackIndex = GameGlobal.TouchEventHandlers.indexOf(touchEventHandler)
    if (callbackIndex > -1)
      GameGlobal.TouchEventHandlers.splice(callbackIndex, 1)
  }
}