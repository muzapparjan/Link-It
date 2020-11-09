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
    this.AnimationID = 0
    this.BindLoop = this.AnimationLoop.bind(this)
    this.Worlds = new Array()
    this.Worlds.push(new TestWorld())
    this.BindLoop()
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