/**
 * ClickAudioFxSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-17
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import AudioSource from "../coreComponents/AudioSource"

/** 点击音效系统 */
export default class ClickAudioFxSystem extends System {
  /** 创建一个新的点击音效系统 */
  constructor() {
    super("ClickAudioFxSystem", -1, ClickAudioFxSystem.MatchFunction, ClickAudioFxSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("Clicked") && !entity.CheckComponentByName("AudioSource")
  }
  /**
   * 系统规则：给被点击的实体添加点击音效
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    this.CommandBuffer.push(() => {
      entity.AddComponent(new AudioSource("audio/Select.mp3", 0, true, false, 1))
    })
  }
}