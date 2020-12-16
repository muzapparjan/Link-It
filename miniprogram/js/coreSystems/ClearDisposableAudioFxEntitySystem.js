/**
 * ClearDisposableAudioFxEntitySystem.js
 * HUST CS1801 Muzappar
 * 2020-11-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"

/** 清理已播放完毕的音频源实体系统 */
export default class ClearDisposableAudioFxEntitySystem extends System {
  /** 创建一个新的清理已播放完毕的音频源实体系统 */
  constructor() {
    super("ClearDisposableAudioFxEntitySystem", 20.0, ClearDisposableAudioFxEntitySystem.MatchFunction, ClearDisposableAudioFxEntitySystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("AudioSource") && entity.CheckComponentByName("Disposable")
  }
  /**
   * 系统规则：销毁已播放完毕的音频上下文，并删除实体
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let audioSource = entity.GetComponentByName("AudioSource")
    if (audioSource.Finished) {
      audioSource.Context.destroy()
      this.CommandBuffer.push(() => {
        entity.World.RemoveEntity(entity)
      })
    }
  }
}