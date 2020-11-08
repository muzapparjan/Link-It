/**
 * ResourceLoaderSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import World from "../framework/World"
import TransformSystem from "../coreSystems/TransformSystem"
import ResourceLoaderSystem from "../coreSystems/ResourceLoaderSystem"
import TestLoggerSystem from "../logicalSystems/TestLoggerSystem"
import TestLogger from "../logicalComponents/TestLogger"

/** 测试世界 */
export default class TestWorld extends World {
  /** 创建一个新的测试世界 */
  constructor() {
    super("TestWorld")
    this.InitializeSystems()
    this.InitializeEntities()
  }
  /** 初始化默认系统 */
  InitializeSystems(){
    this.AddSystem(new TransformSystem())
    this.AddSystem(new ResourceLoaderSystem())
    this.AddSystem(new TestLoggerSystem())
    //TODO
  }
  /** 初始化默认实体 */
  InitializeEntities(){
    let testEntity = this.CreateEntity()
    testEntity.AddComponent(new TestLogger("Hello!"))
  }
}