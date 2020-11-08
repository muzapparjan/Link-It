/**
 * Sprite.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import Vector from "./Vector"

/** 图像块（精灵） */
export default class Sprite {
  constructor(texture = null, clipStartPos = new Vector(), clipSize = new Vector()) {
    this.Texture = texture
    this.ClipStartPos = clipStartPos
    this.ClipSize = clipSize
  }
}