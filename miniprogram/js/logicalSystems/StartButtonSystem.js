/**
 * StartButtonSystem.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import LevelGenerator from "../logicalComponents/LevelGenerator"
import Vector from "../util/Vector"
import SpriteRenderer from "../coreComponents/SpriteRenderer"
import SpriteProvider from "../coreComponents/SpriteProvider"
import Transform from "../coreComponents/Transform"
import SpriteRequest from "../coreComponents/SpriteRequest"
import { ClickGestureDetector } from "../coreComponents/Gestures"
import BoxCollider from "../coreComponents/BoxCollider"
import RestartButton from "../logicalComponents/RestartButton"

/** 开始游戏系统 */
export default class StartButtonSystem extends System {
  /** 创建一个新的开始游戏系统 */
  constructor() {
    super("StartButtonSystem", 0, StartButtonSystem.MatchFunction, StartButtonSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("StartButton") && entity.CheckComponentByName("Clicked")
  }
  /**
   * 系统规则：当开始游戏按钮被点击时删除按钮和标题，进入关卡
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    this.CommandBuffer.push(() => {
      GameGlobal.Level = 1
      GameGlobal.Score = 0
      let levelGeneratorEntity = entity.World.CreateEntity()
      levelGeneratorEntity.AddComponent(new LevelGenerator())
      let restartBtnEntity = entity.World.CreateEntity()
      restartBtnEntity.AddComponent(new Transform(Vector.VectorScale(GameGlobal.ScreenSize, new Vector(0.98, 0.01)), 0, new Vector(50, 50), new Vector(1, 0)))
      restartBtnEntity.AddComponent(new SpriteRenderer(true, 1, -1))
      restartBtnEntity.AddComponent(new SpriteProvider())
      restartBtnEntity.AddComponent(new SpriteRequest("images/restart.png", new Vector(0, 0), new Vector(67, 69)))
      restartBtnEntity.AddComponent(new ClickGestureDetector())
      restartBtnEntity.AddComponent(new BoxCollider())
      restartBtnEntity.AddComponent(new RestartButton())
      entity.World.RemoveEntity(entity)
    })
  }
}