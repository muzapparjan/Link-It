import Vector from "./util/Vector"
import { OnTouchStartHandler, OnTouchMoveHandler, OnTouchEndHandler, OnTouchCancelHandler, OffTouchStartHandler, OffTouchMoveHandler, OffTouchEndHandler, OffTouchCancelHandler } from "./coreComponents/EventHandlers"
import TestWorld from "./worlds/TestWorld"

/** 画布 */
const canvas = window.canvas
/** 画布上下文 */
GameGlobal.Context = canvas.getContext('2d')
/** 屏幕尺寸 */
GameGlobal.ScreenSize = new Vector(canvas.width, canvas.height)

export default class Main {
  constructor() {
    this.Initialize()
    this.Startup()
  }
  /** 初始化 */
  Initialize() {
    this.InitializeAnimationLoop()
    this.InitializeInputHandlers()
    this.InitializeWorlds()
  }
  /** 启动 */
  Startup() {
    this.BindLoop()
  }
  /** 初始化动画循环 */
  InitializeAnimationLoop() {
    this.AnimationID = 0
    this.BindLoop = this.AnimationLoop.bind(this)
  }
  /** 初始化世界 */
  InitializeWorlds() {
    this.Worlds = new Array()
    this.Worlds.push(new TestWorld())
  }
  /** 初始化输入处理器 */
  InitializeInputHandlers() {
    GameGlobal.TouchEventHandlers = new Array()
    this.OnTouchStart = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchStartHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OnTouchMove = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchMoveHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OnTouchEnd = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchEndHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OnTouchCancel = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchCancelHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OffTouchStart = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchStartHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OffTouchMove = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchMoveHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OffTouchEnd = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchEndHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    this.OffTouchCancel = function (touches, changedTouches, timeStamp) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchCancelHandler(touches, changedTouches, timeStamp))
      })
    }.bind(this)
    wx.onTouchStart(this.OnTouchStart)
    wx.onTouchMove(this.OnTouchMove)
    wx.onTouchEnd(this.OnTouchEnd)
    wx.onTouchCancel(this.OnTouchCancel)
    wx.offTouchStart(this.OffTouchStart)
    wx.offTouchMove(this.OffTouchMove)
    wx.offTouchEnd(this.OffTouchEnd)
    wx.offTouchCancel(this.OffTouchCancel)
  }
  /** 帧更新回调 */
  AnimationLoop() {
    window.cancelAnimationFrame(this.AnimationID)
    GameGlobal.Context.fillStyle = "#000000"
    GameGlobal.Context.fillRect(0, 0, GameGlobal.ScreenSize.x, GameGlobal.ScreenSize.y)
    this.Update()
    this.AnimationID = window.requestAnimationFrame(this.BindLoop)
  }
  /** 模拟更新世界 */
  Update() {
    /** 前后两次更新间隔时长 */
    let deltaTime = 0
    this.Worlds.forEach(world => {
      world.Update(deltaTime)
    })
  }
}