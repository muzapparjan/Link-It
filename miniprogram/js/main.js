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
    this.InitializeWorlds()
    this.InitializeInputHandlers()
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
    GameGlobal.OnTouchStartCallbacks = new Array()
    GameGlobal.OnTouchMoveCallbacks = new Array()
    GameGlobal.OnTouchEndCallbacks = new Array()
    GameGlobal.OnTouchCancelCallbacks = new Array()
    GameGlobal.OffTouchStartCallbacks = new Array()
    GameGlobal.OffTouchMoveCallbacks = new Array()
    GameGlobal.OffTouchEndCallbacks = new Array()
    GameGlobal.OffTouchCancelCallbacks = new Array()
    wx.onTouchStart((touches, changedTouches, timeStamp) => {
      GameGlobal.OnTouchStartCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchMove((touches, changedTouches, timeStamp) => {
      GameGlobal.OnTouchMoveCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchEnd((touches, changedTouches, timeStamp) => {
      GameGlobal.OnTouchEndCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.onTouchCancel((touches, changedTouches, timeStamp) => {
      GameGlobal.OnTouchCancelCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchStart((touches, changedTouches, timeStamp) => {
      GameGlobal.OffTouchStartCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchMove((touches, changedTouches, timeStamp) => {
      GameGlobal.OffTouchMoveCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchEnd((touches, changedTouches, timeStamp) => {
      GameGlobal.OffTouchEndCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
      });
    })
    wx.offTouchCancel((touches, changedTouches, timeStamp) => {
      GameGlobal.OffTouchCancelCallbacks.forEach(callback => {
        callback(touches, changedTouches, timeStamp)
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