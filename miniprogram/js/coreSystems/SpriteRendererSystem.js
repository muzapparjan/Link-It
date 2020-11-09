/**
 * SpriteRendererSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-8
 */

import System from "../framework/System"
import Vector from "../util/Vector"

/** 图片渲染系统 */
export default class SpriteRendererSystem extends System {
  /** 创建一个新的图片渲染系统 */
  constructor() {
    super("SpriteRendererSystem", -10.0, SpriteRendererSystem.MatchFunction, SpriteRendererSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("SpriteProvider") && entity.CheckComponentByName("SpriteRenderer") && entity.CheckComponentByName("Transform")
  }
  /**
   * 系统规则：根据图片与变换数据渲染实体到屏幕
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let spriteRenderer = entity.GetComponentByName("SpriteRenderer")
    if (!spriteRenderer.Visibility)
      return
    let transform = entity.GetComponentByName("Transform")
    let spriteProvider = entity.GetComponentByName("SpriteProvider")
    if (spriteProvider.SpriteList.length <= 0)
      return
    if (spriteProvider.SpriteList.length <= spriteProvider.TargetSpriteIndex)
      return
    if (spriteProvider.TargetSpriteIndex < 0)
      return

    let targetSprite = spriteProvider.SpriteList[spriteProvider.TargetSpriteIndex]
    if (targetSprite == null || targetSprite == undefined)
      return
    let targetTexture = targetSprite.Texture
    if (targetTexture == null || targetTexture == undefined)
      return
    if (!targetTexture.Loaded || targetTexture.Error)
      return
    GameGlobal.Context.save()
    GameGlobal.Context.globalAlpha = spriteRenderer.Transparency

    let finalSize = new Vector(targetSprite.ClipSize.x*transform.Scale.x,targetSprite.ClipSize.y*transform.Scale.y)

    let deltaV = new Vector(-finalSize.x* transform.Pivot.x,-finalSize.y* transform.Pivot.y)
    GameGlobal.Context.translate(deltaV.x,deltaV.y)

    GameGlobal.Context.drawImage(targetTexture.Image,targetSprite.ClipStartPos.x,targetSprite.ClipStartPos.y,targetSprite.ClipSize.x,targetSprite.ClipSize.y,transform.Position.x,transform.Position.y,finalSize.x,finalSize.y)

    GameGlobal.Context.restore()
  }
}