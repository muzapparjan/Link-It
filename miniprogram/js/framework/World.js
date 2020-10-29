/**
 * World.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

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
    //TODO
  }
  AddEntity(entity) {
    //TODO
  }
  RemoveEntity(entity) {
    //TODO
  }
  AddSystem(system) {
    if (system == null || system == undefined)
      return
    this.Systems.push(system)
    this.Systems.sort((a, b) => a.Priority - b.Priority)
  }
  RemoveSystem(system) {
    let targetIndex = this.Systems.indexOf(system)
  }
  FindEntityByID(id) {
    //TODO
  }
}