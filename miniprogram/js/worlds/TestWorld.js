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
import TestName from "../logicalComponents/TestName"
import TestLogNameSystem from "../logicalSystems/TestLogNameSystem"
import CleanConsumedEventHandlerSystem from "../coreSystems/CleanConsumedEventHandlerSystem"
import GestureDetectorSystem from "../coreSystems/GestureDetectorSystem"
import EventHandler from "../coreComponents/EventHandlers"
import { ClickGestureDetector } from "../coreComponents/Gestures"
import BoxCollider from "../coreComponents/BoxCollider"
import SelectableTile from "../logicalComponents/SelectableTile"
import TileLayoutManagerSystem from "../logicalSystems/TileLayoutManagerSystem"
import TileSelectionSystem from "../logicalSystems/TileSelectionSystem"

/** 测试世界 */
export default class TestWorld extends World {
  /** 创建一个新的测试世界 */
  constructor() {
    super("TestWorld")

    SelectableTile.RowCount = 5
    SelectableTile.ColumnCount = 5
    SelectableTile.TileNormalSize = new Vector(50, 50)
    SelectableTile.TileSelectedSize = new Vector(60, 60)
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
    this.AddSystem(new TileLayoutManagerSystem(new Vector()))
    this.AddSystem(new TileSelectionSystem())

    /** 逻辑系统 */

    /** 测试系统 */
    this.AddSystem(new TestLoggerSystem())
    this.AddSystem(new TestLogNameSystem())
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

    /** 事件持有者 */
    let eventHandlerEntity = this.CreateEntity()
    eventHandlerEntity.AddComponent(new EventHandler())

    /** 1号组件与系统测试员 */
    /*let testEntity = this.CreateEntity()
    testEntity.AddComponent(new Transform(new Vector(200, 200), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
    testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
    testEntity.AddComponent(new SpriteProvider())
    testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(144, 72), new Vector(72, 72), true))
    testEntity.AddComponent(new TestName("葡萄"))
    testEntity.AddComponent(new ClickGestureDetector())
    testEntity.AddComponent(new BoxCollider())*/
    //testEntity.AddComponent(new SelectableTile(1,0,0))

    /** 2号组件与系统测试员 */
    /*let testEntity2 = this.CreateEntity()
    testEntity2.AddComponent(new Transform(new Vector(0, 0), 0, new Vector(200, 200), new Vector(0, 0)))
    testEntity2.AddComponent(new SpriteRenderer(true, 1.0, 0.0))
    testEntity2.AddComponent(new SpriteProvider())
    testEntity2.AddComponent(new SpriteRequest("images/Test.png", new Vector(0, 72), new Vector(72, 72), true))
    testEntity2.AddComponent(new TestName("香蕉"))
    testEntity2.AddComponent(new ClickGestureDetector())
    testEntity2.AddComponent(new BoxCollider(new Vector(0.5, 0.5)))*/

    var syq=new  Array(25)
    for (let i = 0; i < 25; i++)
    {
      syq[i]=0;
    }
    syq[12]=1;
    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(144, 72), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(1, x, y))
      }
      
    }
    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(72, 72), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(2, x, y))
      }
      
    }

    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(0, 72), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(3, x, y))
      }
      
    }
    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(0, 0), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(4, x, y))
      }
      
    }
    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(72, 216), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(5, x, y))
      }
      
    }
    for (let i = 0; i <4;) {
      let a=Math.floor(Math.random()*26)
      if(syq[a]==0)
      {
        syq[a]=1;
        i++;
      
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(216, 216), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        let x=Math.floor(a/5)
        let y=Math.floor(a%5)
        testEntity.AddComponent(new SelectableTile(6, x, y))
      }
      
    }
   /* for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let testEntity = this.CreateEntity()
        testEntity.AddComponent(new Transform(new Vector(100, 100), 0, new Vector(100, 100), new Vector(0.5, 0.5)))
        testEntity.AddComponent(new SpriteRenderer(true, 1.0, 1.0))
        testEntity.AddComponent(new SpriteProvider())
        testEntity.AddComponent(new SpriteRequest("images/Test.png", new Vector(144, 72), new Vector(72, 72), true))
        testEntity.AddComponent(new ClickGestureDetector())
        testEntity.AddComponent(new BoxCollider())
        testEntity.AddComponent(new SelectableTile(1, i, j))
      }
    }*/
  }
}