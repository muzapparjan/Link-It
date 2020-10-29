/**
 * Entity.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

import Component from "./Component.js"
import World from "./World.js";

/** 索引池 */
let IDPool = 0

/** 实体类 */
export default class Entity {
  /** 
   * 创建一个新的实体
   * @param {World} world 实体所属的世界
   */
  constructor(world) {
    /** 唯一标识 */
    this.ID = IDPool
    IDPool = IDPool + 1
    /** 所属世界 */
    this.World = world
    /** 组件列表 */
    this.Components = new Array()
  }
  /**
   * 添加组件
   * @param {Component} component 要添加的组件
   */
  AddComponent(component) {
    let targetIndex = this.Components.indexOf(component)
    if (targetIndex > -1)
      return
    if (component.IsUnique) {
      let canAdd = true
      for (let i = 0; i < this.Components.length; i++) {
        if (this.Components[i].Name == component.Name) {
          canAdd = false
          break
        }
      }
      if (!canAdd)
        return
    }
    this.Components.push(component)
    this.World.ReceiveMessage(this, "AddComponent", component)
  }
  /**
   * 删除指定组件
   * @param {Component} component 要删除的组件
   */
  RemoveComponent(component) {
    let targetIndex = this.Components.indexOf(component)
    if (targetIndex > -1) {
      this.Components.splice(targetIndex, 1)
      this.World.ReceiveMessage(this, "RemoveComponent", component)
    }
  }
  /**
   * 根据组件名称查找并删除组件
   * @param {Component} componentName 要删除的组件名
   */
  RemoveComponentByName(componentName) {
    let targetIndex = -1
    let targetComponent = null
    for (let i = 0; i < this.Components.length; i++)
      if (this.Components[i].Name == componentName) {
        targetIndex = i
        targetComponent = this.Components[i]
        break
      }
    if (targetIndex > -1) {
      this.Components.splice(targetIndex, 1)
      this.World.ReceiveMessage(this, "RemoveComponent", targetComponent)
    }
  }
}