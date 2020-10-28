/**
 * Vector.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/**
 * 二维向量类
 */
export default class Vector {
  /**
   * 创建一个新的二维向量
   * @param {Number} x x分量的值
   * @param {Number} y y分量的值
   */
  constructor(x = 0.0, y = 0.0) {
    this.x = x;
    this.y = y;
  }
  /**
   * 两个向量相加，并返回新向量
   * @param {Vector} A 要相加的向量
   * @param {Vector} B 要相加的向量
   */
  static Add(A, B) {
    return new Vector(A.x + B.x, A.y + B.y);
  }
  /**
   * 缩放向量，并返回新向量
   * @param {Vector} V 要缩放的向量
   * @param {Number} k 缩放系数
   */
  static Scale(V, k) {
    return new Vector(V.x * k, V.y * k);
  }
}