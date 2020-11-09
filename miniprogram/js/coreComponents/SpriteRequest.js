/**
 * SpriteRequest.js
 * HUST CS1801 Muzappar
 * 2020-11-8
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/** 图片请求器 */
export default class SpriteRequest extends Component {
  /**
   * 创建一个新的图片请求器
   * @param {String} texturePath 贴图路径
   * @param {Vector} clipStartPos 切片起始坐标
   * @param {Vector} clipSize 切片大小
   * @param {Boolean} alwaysRequest 请求失败时，是否一直请求
   */
  constructor(texturePath, clipStartPos = new Vector(), clipSize = new Vector(), alwaysRequest = true) {
    super("SpriteRequest", false)
    /** 贴图路径 */
    this.TexturePath = texturePath
    /** 切片起始坐标 */
    this.ClipStartPos = clipStartPos
    /** 切片大小 */
    this.ClipSize = clipSize
    /** 是否一直请求 */
    this.AlwaysRequest = alwaysRequest
  }
}