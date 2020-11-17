/**
 * CleanConsumedEventHandlerSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 清理已消费的事件处理器系统 */
export default class CleanConsumedEventHandlerSystem extends System {
  /** 创建一个新的清理已消费的事件处理器系统 */
  constructor() {
    super("CleanConsumedEventHandlerSystem", 20.0, CleanConsumedEventHandlerSystem.MatchFunction, CleanConsumedEventHandlerSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("EventHandler")
  }
  /**
   * 系统规则：根据各类事件处理器的数据清理已处理的事件[与过时的事件]
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let needRemovedComponents = new Array()
    let onTouchStartHandlers = entity.GetAllComponentsByName("OnTouchStartHandler")
    let onTouchMoveHandlers = entity.GetAllComponentsByName("OnTouchMoveHandler")
    let onTouchEndHandlers = entity.GetAllComponentsByName("OnTouchEndHandler")
    let onTouchCancelHandlers = entity.GetAllComponentsByName("OnTouchCancelHandler")
    let offTouchStartHandlers = entity.GetAllComponentsByName("OffTouchStartHandler")
    let offTouchMoveHandlers = entity.GetAllComponentsByName("OffTouchMoveHandler")
    let offTouchEndHandlers = entity.GetAllComponentsByName("OffTouchEndHandler")
    let offTouchCancelHandlers = entity.GetAllComponentsByName("OffTouchCancelHandler")
    if (onTouchStartHandlers != null && onTouchStartHandlers != undefined && onTouchStartHandlers.length > 0) {
      for (let i = 0; i < onTouchStartHandlers.length; i++) {
        if (onTouchStartHandlers[i].Consumed)
          needRemovedComponents.push(onTouchStartHandlers[i])
      }
    }
    if (onTouchMoveHandlers != null && onTouchMoveHandlers != undefined && onTouchMoveHandlers.length > 0) {
      for (let i = 0; i < onTouchMoveHandlers.length; i++) {
        if (onTouchMoveHandlers[i].Consumed)
          needRemovedComponents.push(onTouchMoveHandlers[i])
      }
    }
    if (onTouchEndHandlers != null && onTouchEndHandlers != undefined && onTouchEndHandlers.length > 0) {
      for (let i = 0; i < onTouchEndHandlers.length; i++) {
        if (onTouchEndHandlers[i].Consumed)
          needRemovedComponents.push(onTouchEndHandlers[i])
      }
    }
    if (onTouchCancelHandlers != null && onTouchCancelHandlers != undefined && onTouchCancelHandlers.length > 0) {
      for (let i = 0; i < onTouchCancelHandlers.length; i++) {
        if (onTouchCancelHandlers[i].Consumed)
          needRemovedComponents.push(onTouchCancelHandlers[i])
      }
    }
    if (offTouchStartHandlers != null && offTouchStartHandlers != undefined && offTouchStartHandlers.length > 0) {
      for (let i = 0; i < offTouchStartHandlers.length; i++) {
        if (offTouchStartHandlers[i].Consumed)
          needRemovedComponents.push(offTouchStartHandlers[i])
      }
    }
    if (offTouchMoveHandlers != null && offTouchMoveHandlers != undefined && offTouchMoveHandlers.length > 0) {
      for (let i = 0; i < offTouchMoveHandlers.length; i++) {
        if (offTouchMoveHandlers[i].Consumed)
          needRemovedComponents.push(offTouchMoveHandlers[i])
      }
    }
    if (offTouchEndHandlers != null && offTouchEndHandlers != undefined && offTouchEndHandlers.length > 0) {
      for (let i = 0; i < offTouchEndHandlers.length; i++) {
        if (offTouchEndHandlers[i].Consumed)
          needRemovedComponents.push(offTouchEndHandlers[i])
      }
    }
    if (offTouchCancelHandlers != null && offTouchCancelHandlers != undefined && offTouchCancelHandlers.length > 0) {
      for (let i = 0; i < offTouchCancelHandlers.length; i++) {
        if (offTouchCancelHandlers[i].Consumed)
          needRemovedComponents.push(offTouchCancelHandlers[i])
      }
    }
    this.CommandBuffer.push(() => {
      needRemovedComponents.forEach(component => {
        entity.RemoveComponent(component)
      });
    })
  }
}