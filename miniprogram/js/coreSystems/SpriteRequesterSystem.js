/**
 * SpriteRequesterSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-8
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Sprite from "../util/Sprite"

/** 图片请求器系统 */
export default class SpriteRequesterSystem extends System {
  /** 创建一个新的图片请求器系统 */
  constructor() {
    super("SpriteRequesterSystem", 0.0, SpriteRequesterSystem.MatchFunction, SpriteRequesterSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("SpriteRequest") && entity.CheckComponentByName("SpriteProvider")
  }
  /**
   * 系统规则：根据图片请求信息，尝试从资源池获取对应图片，添加到图片提供者组件
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let spriteRequest = entity.GetComponentByName("SpriteRequest")
    let spriteProvider = entity.GetComponentByName("SpriteProvider")

    if (!spriteRequest.AlwaysRequest)
      this.CommandBuffer.push(() => {
        entity.RemoveComponent(spriteRequest)
      })

    let resourcePoolEntity = entity.World.FindEntityByRequiredComponentName("ResourcePool")
    if (resourcePoolEntity == undefined || resourcePoolEntity == null)
      return
    let resourcePool = resourcePoolEntity.GetComponentByName("ResourcePool")
    let targetTexture = resourcePool.TexturePool.find(texture => texture.Path == spriteRequest.TexturePath)
    if (targetTexture == null || targetTexture == undefined) {
      return
    }

    spriteProvider.SpriteList.push(new Sprite(targetTexture, spriteRequest.ClipStartPos, spriteRequest.ClipSize))
  }
}