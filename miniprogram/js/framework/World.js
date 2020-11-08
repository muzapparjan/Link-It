/**
 * World.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

import System from "./System"
import Entity from "./Entity"

/** 世界类 */
export default class World {
  /**
   * 创建一个新世界
   * @param {String}} name 世界名称
   */
  constructor(name) {
    /** 世界名称 */
    this.Name = name
    /** 实体列表 */
    this.Entities = new Array()
    /** 规则列表 */
    this.Systems = new Array()
  }
  /**
   * 更新世界
   * @param {Number} deltaTime 更新间隔时长
   */
  Update(deltaTime) {
    this.Systems.forEach(system => {
      system.Execute(deltaTime)
    });
  }
  /**
   * 创建一个新的空白实体
   * @returns {Entity} 新的空白实体
   */
  CreateEntity(){
    let entity = new Entity(this)
    this.Entities.push(entity)
    this.Systems.forEach(system => {
      system.TryMatch(entity)
    });
    return entity
  }
  /**
   * 添加一个新实体到世界
   * @param {Entity} entity 要添加的实体
   */
  AddEntity(entity) {
    if (entity == null || entity == undefined)
      return
    if (this.Entities.indexOf(entity) > -1)
      return
    entity.World = this
    this.Entities.push(entity)
    this.Systems.forEach(system => {
      system.TryMatch(entity)
    });
  }
  /**
   * 移除指定的实体
   * @param {Entity} entity 要移除的实体
   */
  RemoveEntity(entity) {
    if (entity == null || entity == undefined)
      return
    let index = this.Entities.indexOf(entity)
    if (index > -1)
      this.Entities.splice(index, 1)
    this.Systems.forEach(system => {
      index = system.MatchedEntities.indexOf(entity)
      if (index > -1)
        system.MatchedEntities.splice(index, 1)
    });
  }
  /**
   * 添加新的系统
   * @param {System} system 要添加的系统
   */
  AddSystem(system) {
    if (system == null || system == undefined)
      return
    if (this.Systems.indexOf(system) > -1)
      return
    this.Systems.push(system)
    this.Systems.sort((a, b) => a.Priority - b.Priority)
    this.Entities.forEach(entity => {
      system.TryMatch(entity)
    });
  }
  /**
   * 移除已有的系统
   * @param {System} system 要移除的系统
   */
  RemoveSystem(system) {
    let targetIndex = this.Systems.indexOf(system)
    if (targetIndex > -1)
      this.Systems.splice(targetIndex, 1)
  }
  /**
   * 根据ID查找实体
   * @param {Number} id 要查找的实体唯一标识
   */
  FindEntityByID(id) {
    return this.Entities.find(entity => entity.ID == id)
  }
  /**
   * 接收消息并作出响应
   * @param {Entity} entity 信息的发送者
   * @param {String} keyWord 信息关键字
   * @param {*} messages 信息主体
   */
  ReceiveMessage(entity, keyWord, ...messages) {
    switch (keyWord) {
      case "AddComponent":
        this.Systems.forEach(system => {
          system.TryMatch(entity)
        });
        break
      case "RemoveComponent":
        this.Systems.forEach(system => {
          system.TryMatch(entity)
        });
        break
      default:
        break
    }
  }
}