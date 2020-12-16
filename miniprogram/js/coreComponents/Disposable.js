/**
 * Disposable.js
 * HUST CS1801 Muzappar
 * 2020-12-17
 */

import Component from "../framework/Component"

/** 一次性组件 */
export default class Disposable extends Component {
  /** 创建一个新的一次性组件 */
  constructor() {
    super("Disposable", true)
  }
}