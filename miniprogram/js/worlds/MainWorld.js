/**
 * MainWorld.js
 * HUST CS1801 Muzappar
 * 2020-12-16
 */

import World from "../framework/World"

import TransformSystem from "../coreSystems/TransformSystem"
import ResourceLoaderSystem from "../coreSystems/ResourceLoaderSystem"
import SpriteRendererSystem from "../coreSystems/SpriteRendererSystem"
import SpriteRequesterSystem from "../coreSystems/SpriteRequesterSystem"
import CleanConsumedEventHandlerSystem from "../coreSystems/CleanConsumedEventHandlerSystem"
import GestureDetectorSystem from "../coreSystems/GestureDetectorSystem"
import LabelRendererSystem from "../coreSystems/LabelRendererSystem"
import ClearAudioSourceSystem from "../coreSystems/ClearAudioSourceSystem"
import ClearDisposableAudioFxEntitySystem from "../coreSystems/ClearDisposableAudioFxEntitySystem"

import TileLayoutManagerSystem from "../logicalSystems/TileLayoutManagerSystem"
import TileSelectionSystem from "../logicalSystems/TileSelectionSystem"
import StartButtonSystem from "../logicalSystems/StartButtonSystem"
import LevelGenerationSystem from "../logicalSystems/LevelGenerationSystem"
import RestartButtonSystem from "../logicalSystems/RestartButtonSystem"
import UpdateLevelLabelSystem from "../logicalSystems/UpdateLevelLabelSystem"
import UpdateScoreLabelSystem from "../logicalSystems/UpdateScoreLabelSystem"
import ClickAudioFxSystem from "../logicalSystems/ClickAudioFxSystem"

import SpriteRenderer from "../coreComponents/SpriteRenderer"
import SpriteProvider from "../coreComponents/SpriteProvider"
import Transform from "../coreComponents/Transform"
import ResourcePool from "../coreComponents/ResourcePool"
import ResourceLoader from "../coreComponents/ResourceLoader"
import SpriteRequest from "../coreComponents/SpriteRequest"
import EventHandler from "../coreComponents/EventHandlers"
import { ClickGestureDetector } from "../coreComponents/Gestures"
import BoxCollider from "../coreComponents/BoxCollider"
import AudioSource from "../coreComponents/AudioSource"

import SelectableTile from "../logicalComponents/SelectableTile"
import StartButton from "../logicalComponents/StartButton"

import Vector from "../util/Vector"

/** 主世界 */
export default class MainWorld extends World {
  /** 创建一个新的主世界 */
  constructor() {
    super("MainWorld")

    SelectableTile.RowCount = 6
    SelectableTile.ColumnCount = 6
    SelectableTile.TileNormalSize = new Vector(40, 40)
    SelectableTile.TileSelectedSize = new Vector(50, 50)
    SelectableTile.TileMargin = 10

    this.InitializeSystems()
    this.InitializeEntities()
  }
  /** 初始化默认系统 */
  InitializeSystems() {
    /** 核心系统 */
    this.AddSystem(new TransformSystem())
    this.AddSystem(new ResourceLoaderSystem())
    this.AddSystem(new SpriteRendererSystem())
    this.AddSystem(new SpriteRequesterSystem())
    this.AddSystem(new CleanConsumedEventHandlerSystem())
    this.AddSystem(new GestureDetectorSystem())
    this.AddSystem(new LabelRendererSystem())
    this.AddSystem(new ClearAudioSourceSystem())
    this.AddSystem(new ClearDisposableAudioFxEntitySystem())

    /** 逻辑系统 */
    this.AddSystem(new TileLayoutManagerSystem(new Vector()))
    this.AddSystem(new TileSelectionSystem())
    this.AddSystem(new StartButtonSystem())
    this.AddSystem(new LevelGenerationSystem())
    this.AddSystem(new RestartButtonSystem())
    this.AddSystem(new UpdateLevelLabelSystem())
    this.AddSystem(new UpdateScoreLabelSystem())
    this.AddSystem(new ClickAudioFxSystem())
  }
  /** 初始化默认实体 */
  InitializeEntities() {
    /** 资源持有者 */
    let resourceEntity = this.CreateEntity()
    resourceEntity.AddComponent(new ResourcePool())
    let resourceLoader = new ResourceLoader()
    resourceLoader.TexturePathList.push("images/TileSet.png")
    resourceLoader.TexturePathList.push("images/start.png")
    resourceLoader.TexturePathList.push("images/restart.png")
    resourceLoader.TexturePathList.push("images/background.png")
    resourceLoader.TexturePathList.push("images/level.png")
    resourceLoader.TexturePathList.push("images/score.png")
    resourceEntity.AddComponent(resourceLoader)

    /** 事件持有者 */
    let eventHandlerEntity = this.CreateEntity()
    eventHandlerEntity.AddComponent(new EventHandler())

    /** 背景图片 */
    let bgEntity = this.CreateEntity()
    bgEntity.AddComponent(new Transform(new Vector(0, 0), 0, Vector.Copy(GameGlobal.ScreenSize), new Vector(0, 0)))
    bgEntity.AddComponent(new SpriteRenderer(true, 1, -1))
    bgEntity.AddComponent(new SpriteProvider())
    bgEntity.AddComponent(new SpriteRequest("images/background.png", new Vector(0, 0), new Vector(766, 1100)))
    bgEntity.AddComponent(new AudioSource("audio/Music.mp3", 0, true, true, 1))

    /** 开始游戏按钮 */
    let startBtn = this.CreateEntity()
    startBtn.AddComponent(new Transform(Vector.VectorScale(GameGlobal.ScreenSize, new Vector(0.5, 0.7)), 0, new Vector(GameGlobal.ScreenSize.x * 0.7, GameGlobal.ScreenSize.x * 0.7 * 89 / 312), new Vector(0.5, 0.5)))
    startBtn.AddComponent(new SpriteRenderer(true, 1, -1))
    startBtn.AddComponent(new SpriteProvider())
    startBtn.AddComponent(new SpriteRequest("images/start.png", new Vector(0, 0), new Vector(312, 89)))
    startBtn.AddComponent(new ClickGestureDetector())
    startBtn.AddComponent(new BoxCollider())
    startBtn.AddComponent(new StartButton())
  }
}