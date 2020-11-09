/**
 * ResourcePool.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import Component from "../framework/Component"

/** 资源池 */
export default class ResourcePool extends Component {
  /** 创建一个新的资源池 */
  constructor() {
    super("ResourcePool", true)
    /** 贴图池 */
    this.TexturePool = new Array()
    /** 音频池 */
    this.AudioPool = new Array()
  }
}