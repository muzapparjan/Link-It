/**
 * ResourceLoaderSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import World from "../framework/World"
import TransformSystem from "../coreSystems/TransformSystem"
import ResourceLoaderSystem from "../coreSystems/ResourceLoaderSystem"
import TestLoggerSystem from "../logicalSystems/TestLoggerSystem"
import SpriteRenderer from "../coreComponents/SpriteRenderer"
import SpriteProvider from "../coreComponents/SpriteProvider"
import SpriteRendererSystem from "../coreSystems/SpriteRendererSystem"
import Transform from "../coreComponents/Transform"
import ResourcePool from "../coreComponents/ResourcePool"
import ResourceLoader from "../coreComponents/ResourceLoader"
import SpriteRequesterSystem from "../coreSystems/SpriteRequesterSystem"
import SpriteRequest from "../coreComponents/SpriteRequest"
import Vector from "../util/Vector"

/** 测试世界 */
export default class TestWorld extends World {
  /** 创建一个新的测试世界 */
  constructor() {
    super("TestWorld")
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

    /** 逻辑系统 */

    /** 测试系统 */
    this.AddSystem(new TestLoggerSystem())
  }
  /** 初始化默认实体 */
  InitializeEntities() {
    /** 资源持有者 */
    let resourceEntity = this.CreateEntity()
    resourceEntity.AddComponent(new ResourcePool())
    let resourceLoader = new ResourceLoader()
    resourceLoader.TexturePathList.push("images/Test.png")
    resourceLoader.TexturePathList.push("images/dududu.png")
    resourceEntity.AddComponent(resourceLoader)

    /** 1号组件与系统测试员 */
    let testEntity = this.CreateEntity()
    testEntity.AddComponent(new Transform(new Vector(200, 200), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
    testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
    testEntity.AddComponent(new SpriteProvider())
    testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(144, 72), new Vector(72, 72), true))

    /** 2号组件与系统测试员 */
    let testEntity2 = this.CreateEntity()
    testEntity2.AddComponent(new Transform(new Vector(0, 0), 0, new Vector(200, 200), new Vector(0, 0)))
    testEntity2.AddComponent(new SpriteRenderer(true, 1.0, 0.0))
    testEntity2.AddComponent(new SpriteProvider())
    testEntity2.AddComponent(new SpriteRequest("images/Test.png", new Vector(0, 72), new Vector(72, 72), true))
  }
}