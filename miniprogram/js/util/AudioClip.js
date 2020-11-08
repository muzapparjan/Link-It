/**
 * AudioClip.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

/** 音频 */
export default class AudioClip {
  /**
   * 创建一个新的音频块
   * @param {String} path 源音频路径
   */
  constructor(path) {
    /** 源音频路径 */
    this.Path = path

    /** 源音频上下文 */
    this.Context = wx.createInnerAudioContext()
    //TODO
  }
}