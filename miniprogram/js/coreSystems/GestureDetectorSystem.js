/**
 * GestureDetectorSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"
import { Clicked } from "../coreComponents/Gestures"

/** 手势监测系统 */
export default class GestureDetectorSystem extends System {
  /** 创建一个新的手势监测系统 */
  constructor() {
    super("GestureDetectorSystem", 0.0, GestureDetectorSystem.MatchFunction, GestureDetectorSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("ClickGestureDetector")
  }
  /**
   * 系统规则：根据各类事件处理器的数据判断手势并添加对应组件到实体
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let eventHandlerEntity = entity.World.FindEntityByRequiredComponentName("EventHandler")
    if (eventHandlerEntity == null || eventHandlerEntity == undefined)
      return
    let onTouchStartHandlers = eventHandlerEntity.GetAllComponentsByName("OnTouchStartHandler")
    let onTouchMoveHandlers = eventHandlerEntity.GetAllComponentsByName("OnTouchMoveHandler")
    let onTouchEndHandlers = eventHandlerEntity.GetAllComponentsByName("OnTouchEndHandler")
    let onTouchCancelHandlers = eventHandlerEntity.GetAllComponentsByName("OnTouchCancelHandler")
    let offTouchStartHandlers = eventHandlerEntity.GetAllComponentsByName("OffTouchStartHandler")
    let offTouchMoveHandlers = eventHandlerEntity.GetAllComponentsByName("OffTouchMoveHandler")
    let offTouchEndHandlers = eventHandlerEntity.GetAllComponentsByName("OffTouchEndHandler")
    let offTouchCancelHandlers = eventHandlerEntity.GetAllComponentsByName("OffTouchCancelHandler")

    let commandBuffer = this.CommandBuffer

    let clickGestureDetector = entity.GetComponentByName("ClickGestureDetector")
    let transform = entity.GetComponentByName("Transform")
    let boxCollider = entity.GetComponentByName("BoxCollider")
    if (clickGestureDetector != null && clickGestureDetector != undefined) {
      if (transform != null && transform != undefined) {
        if (onTouchStartHandlers != null && onTouchStartHandlers != undefined) {
          if (boxCollider != null && boxCollider != undefined) {
            onTouchStartHandlers.forEach(onTouchStartHandler => {
              //TODO Detect whether the point is in collider
              let touch = onTouchStartHandler.ChangedTouches[0]//暂时只支持单点触摸
              let touchPos = new Vector(touch.clientX, touch.clientY)
              let center = Vector.Add(transform.Position, Vector.VectorScale(transform.Scale, boxCollider.CenterBias))//暂不考虑旋转
              center = Vector.Subtract(center,Vector.VectorScale(Vector.Subtract(transform.Pivot,new Vector(0.5,0.5)),transform.Scale))
              let boxScale = Vector.VectorScale(transform.Scale, boxCollider.Scale)
              let halfBoxScale = Vector.Scale(boxScale, 0.5)
              let leftTopPos = Vector.Subtract(center, halfBoxScale)
              let rightBottomPos = Vector.Add(center, halfBoxScale)
              if (leftTopPos.x <= touchPos.x && leftTopPos.y <= touchPos.y && rightBottomPos.x >= touchPos.x && rightBottomPos.y >= touchPos.y) {
                onTouchStartHandler.Consumed = true
                //TODO Fix the condition of click event
                commandBuffer.push(() => {
                  entity.AddComponent(new Clicked(onTouchStartHandler.TimeStamp))
                  //console.log(entity)
                })
              }
            });
          }
        }
      }
    }
    //TODO
  }
}