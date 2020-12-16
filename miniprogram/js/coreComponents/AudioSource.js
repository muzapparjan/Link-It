/**
 * AudioSource.js
 * HUST CS1801 Muzappar
 * 2020-12-17
 */

import Component from "../framework/Component"

/** 音频源 */
export default class AudioSource extends Component {
  /**
   * 创建一个新的音频源
   * @param {String} audioPath 要请求的音频路径
   * @param {Number} startTime 开始播放的位置（单位：s）
   * @param {Boolean} autoPlay 是否自动开始播放
   * @param {Boolean} loop 是否循环播放
   * @param {Number} volume 音量 [0,1]
   */
  constructor(audioPath, startTime = 0, autoPlay = false, loop = false, volume = 1) {
    super("AudioSource", true)
    this.Finished = false
    this.Context = wx.createInnerAudioContext()
    this.Context.src = audioPath
    this.Context.startTime = startTime
    this.Context.autoplay = autoPlay
    this.Context.loop = loop
    this.Context.volume = volume
    let audioSource = this
    this.Context.onEnded(() => {
      this.Finished = audioSource
    })
  }
}