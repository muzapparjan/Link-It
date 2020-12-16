/**
 * ClearAudioSourceSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 清理已播放完毕的音频源系统 */
export default class ClearAudioSourceSystem extends System {
  /** 创建一个新的清理已播放完毕的音频源系统 */
  constructor() {
    super("ClearAudioSourceSystem", 20.0, ClearAudioSourceSystem.MatchFunction, ClearAudioSourceSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("AudioSource")
  }
  /**
   * 系统规则：销毁已播放完毕的音频上下文，并移除音源组件
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let audioSource = entity.GetComponentByName("AudioSource")
    if (audioSource.Finished && !audioSource.Context.loop) {
      audioSource.Context.destroy()
      this.CommandBuffer.push(() => {
        entity.RemoveComponent(audioSource)
      })
    }
  }
}