const canvas = wx.createCanvas()
let context = canvas.getContext('2d')

export default class Main {
  constructor() {
    this.Worlds = new Array()
    requestAnimationFrame(this.AnimationLoop.bind(this))
  }
  AnimationLoop(){
    this.Update()
    requestAnimationFrame(this.AnimationLoop.bind(this))
  }
  Update(){
    let deltaTime = 0
    this.Worlds.forEach(world=>{
      world.Update(deltaTime)
    })
  }
}