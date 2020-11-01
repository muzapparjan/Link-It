/**
 * Component.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 组件类 */
export default class Component {
  /**
   * 创建一个新的组件
   * @param {String} name 组件类型名称
   * @param {Boolean} isUnique 该类组件是否唯一
   */
  constructor(name, isUnique) {
    this.Name = name
    this.IsUnique = isUnique
  }
}