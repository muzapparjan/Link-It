/**
 * ResourceLoader.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import Component from "../framework/Component"

/** 资源加载器 */
export default class ResourceLoader extends Component {
  constructor() {
    super("ResourceLoader", true)
    /** 要加载的贴图路径列表 */
    this.TexturePathList = new Array()
    /** 要加载的音频路径列表 */
    this.AudioPathList = new Array()
  }
}