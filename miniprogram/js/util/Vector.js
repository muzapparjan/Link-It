/**
 * Vector.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 二维向量类 */
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
   * 两个向量相加
   * @param {Vector} A 要相加的向量
   * @param {Vector} B 要相加的向量
   * @returns {Vector} 返回新向量
   */
  static Add(A, B) {
    return new Vector(A.x + B.x, A.y + B.y);
  }
  /**
   * 两个向量相减
   * @param {Vector} A 被减向量
   * @param {Vector} B 减向量
   * @returns {Vector} 返回新向量
   */
  static Subtract(A, B) {
    return new Vector(A.x - B.x, A.y - B.y)
  }
  /**
   * 缩放向量
   * @param {Vector} V 要缩放的向量
   * @param {Number} k 缩放系数
   * @returns {Vector} 返回新向量
   */
  static Scale(V, k) {
    return new Vector(V.x * k, V.y * k);
  }
  /**
   * 向量点积
   * @param {Vector} A 要相乘的向量
   * @param {Vector} B 要相乘的向量
   * @returns {Number} 返回标量
   */
  static Dot(A, B) {
    return A.x * B.x + A.y * B.y;
  }
  /**
   * 复制向量并返回新向量
   * @param {Vector} V 要复制的向量
   * @returns {Vector} 复制后的新向量
   */
  static Copy(V) {
    return new Vector(V.x, V.y)
  }
  /**
   * 按分量缩放向量
   * @param {Vector} V 要缩放的向量
   * @param {Vector} K 缩放系数
   * @returns {Vector} 返回新向量
   */
  static VectorScale(V, K) {
    return new Vector(V.x * K.x, V.y * K.y)
  }
}

/** 零向量 */
export const Zero = new Vector()
/** X轴单位向量 */
export const X = new Vector(1.0, 0.0)
/** Y轴单位向量 */
export const Y = new Vector(0.0, 1.0)