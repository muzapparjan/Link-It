/**
 * Texture.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

/** 贴图 */
export default class Texture {
  /**
   * 创建一个新的贴图
   * @param {String} path 源图片路径
   */
  constructor(path) {
    /** 源图片路径 */
    this.Path = path
    /** 是否已加载 */
    this.Loaded = false
    /** 是否加载出错 */
    this.Error = false
    /** 源图片 */
    this.Image = wx.createImage()
    this.Image.src = path
    this.Image.onload = this.OnLoad.bind(this)
    this.Image.onerror = this.OnError.bind(this)
  }
  OnLoad() {
    this.Loaded = true
    this.Error - false
  }
  OnError() {
    this.Error = true
    this.Loaded = false
  }
}