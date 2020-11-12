import Vector from "./util/Vector"
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
    wx.onTouchStart((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OnTouchStart != null && handler.OnTouchStart != undefined)
              handler.OnTouchStart(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchMove((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OnTouchMove != null && handler.OnTouchMove != undefined)
          handler.OnTouchMove(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchEnd((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OnTouchEnd != null && handler.OnTouchEnd != undefined)
          handler.OnTouchEnd(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchCancel((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OnTouchCancel != null && handler.OnTouchCancel != undefined)
          handler.OnTouchCancel(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchStart((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OffTouchStart != null && handler.OffTouchStart != undefined)
          handler.OffTouchStart(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchMove((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OffTouchMove != null && handler.OffTouchMove != undefined)
          handler.OffTouchMove(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchEnd((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OffTouchEnd != null && handler.OffTouchEnd != undefined)
          handler.OffTouchEnd(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchCancel((touches, changedTouches, timeStamp) => {
      GameGlobal.TouchEventHandlers.forEach(handler => {
        if (handler.OffTouchCancel != null && handler.OffTouchCancel != undefined)
          handler.OffTouchCancel(touches, changedTouches, timeStamp)
      });
    })
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