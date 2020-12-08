/**
 * SelectableTile.js
 * HUST CS1801 Muzappar
 * 2020-11-18
 */

import Component from "../framework/Component"
import Vector from "../util/Vector"

/** 可选中的砖块组件 */
export default class SelectableTile extends Component {
  /**
   * 创建一个新的可选中的砖块组件
   * @param {Number} tileType 砖块类型
   * @param {Number} row 所在行（0~RowCount-1）
   * @param {Number} column 所在列（0~ColumnCount-1）
   * @param {Boolean} selected 是否被选中
   */
  constructor(tileType, row = 0, column = 0, selected = false) {
    super("SelectableTile", true)
    /** 砖块类型 */
    this.TileType = tileType
    /** 所在行 */
    this.Row = row
    /** 所在列 */
    this.Column = column
    /** 是否被选中 */
    this.Selected = selected
    if (SelectableTile.RowCount == undefined || SelectableTile.RowCount == null)
      SelectableTile.RowCount = 5
    if (SelectableTile.ColumnCount == undefined || SelectableTile.ColumnCount == null)
      SelectableTile.ColumnCount = 5
    if (SelectableTile.TileNormalSize == undefined || SelectableTile.TileNormalSize == null)
      SelectableTile.TileNormalSize = new Vector(50, 50)
    if (SelectableTile.TileSelectedSize == undefined || SelectableTile.TileSelectedSize == null)
      SelectableTile.TileSelectedSize = new Vector(60, 60)
    if (SelectableTile.TileMargin == undefined || SelectableTile.TileMargin == null)
      SelectableTile.TileMargin = 10
  }
}