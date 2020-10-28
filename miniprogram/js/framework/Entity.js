/**
 * Entity.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 索引池 */
let IDPool = 0

/** 实体类 */
export default class Entity {
  /** 创建一个新的实体 */
  constructor() {
    this.ID = IDPool;
    IDPool = IDPool + 1
    this.Components = new Array()
  }
  AddComponent(component) {
    //TODO
  }
  RemoveComponent(component) {
    //TODO
  }
}