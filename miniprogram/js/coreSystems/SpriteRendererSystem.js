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
    super("SpriteRendererSystem", -10.0, SpriteRendererSystem.MatchFunction, SpriteRendererSystem.ExecutionFunction,true,SpriteRendererSystem.SortFunction)
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
    let deltaV = new Vector(-transform.Scale.x*transform.Pivot.x,-transform.Scale.y*transform.Pivot.y)
    GameGlobal.Context.translate(deltaV.x,deltaV.y)
    GameGlobal.Context.drawImage(targetTexture.Image,targetSprite.ClipStartPos.x,targetSprite.ClipStartPos.y,targetSprite.ClipSize.x,targetSprite.ClipSize.y,transform.Position.x,transform.Position.y,transform.Scale.x,transform.Scale.y)
    GameGlobal.Context.restore()
  }
  /**
   * 同步迭代前的排序规则
   * @param {Entity} entityA 实体A
   * @param {Entity} entityB 实体B
   */
  static SortFunction(entityA,entityB){
    let spriteRendererA = entityA.GetComponentByName("SpriteRenderer")
    let spriteRendererB = entityB.GetComponentByName("SpriteRenderer")
    return spriteRendererA.Layer - spriteRendererB.Layer
  }
}