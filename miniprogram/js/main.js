import Vector from "./util/Vector"
import { OnTouchStartHandler, OnTouchMoveHandler, OnTouchEndHandler, OnTouchCancelHandler, OffTouchStartHandler, OffTouchMoveHandler, OffTouchEndHandler, OffTouchCancelHandler } from "./coreComponents/EventHandlers"
import MainWorld from "./worlds/MainWorld"

/** 画布 */
const canvas = window.canvas
/** 画布上下文 */
GameGlobal.Context = canvas.getContext('2d')
/** 屏幕尺寸 */
GameGlobal.ScreenSize = new Vector(canvas.width, canvas.height)

export default class Main {
  constructor() {
    GameGlobal.MainInstance = this    
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
    //this.Worlds.push(new TestWorld())
    this.Worlds.push(new MainWorld())
  }
  /** 初始化输入处理器 */
  InitializeInputHandlers() {
    GameGlobal.TouchEventHandlers = new Array()
    this.OnTouchStart = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchStartHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OnTouchMove = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchMoveHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OnTouchEnd = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchEndHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OnTouchCancel = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OnTouchCancelHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OffTouchStart = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchStartHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OffTouchMove = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchMoveHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OffTouchEnd = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchEndHandler(res.touches, res.changedTouches, res.timeStamp))
      })
    }.bind(this)
    this.OffTouchCancel = function (res) {
      this.Worlds.forEach(world => {
        let eventHandlerEntity = world.FindEntityByRequiredComponentName("EventHandler")
        if (eventHandlerEntity == null || eventHandlerEntity == undefined)
          return
        eventHandlerEntity.AddComponent(new OffTouchCancelHandler(res.touches, res.changedTouches, res.timeStamp))
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