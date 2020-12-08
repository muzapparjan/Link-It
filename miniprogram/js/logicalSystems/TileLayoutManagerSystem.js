/**
 * TileLayoutManagerSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-19
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Vector from "../util/Vector"
import SelectableTile from "../logicalComponents/SelectableTile"

/** 砖块布局管理系统 */
export default class TileLayoutManagerSystem extends System {
  /**
   * 创建一个新的砖块布局管理系统
   * @param {Vector} layoutBias 布局中心偏移
   */
  constructor(layoutBias = new Vector(0, 50)) {
    super("TileLayoutManagerSystem", 20.0, TileLayoutManagerSystem.MatchFunction, TileLayoutManagerSystem.ExecutionFunction)
    /** 布局中心偏移 */
    this.LayoutBias = layoutBias
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("SelectableTile") && entity.CheckComponentByName("Transform")
  }
  /**
   * 系统规则：根据布局方式设置每个砖块的坐标及大小
   * @param {Entity} entity 遵循规则的实体
   */
  static ExecutionFunction(entity, deltaTime) {
    let transform = entity.GetComponentByName("Transform")
    let selectableTile = entity.GetComponentByName("SelectableTile")
    if (selectableTile.Selected)
      transform.Scale = Vector.Copy(SelectableTile.TileSelectedSize)
    else
      transform.Scale = Vector.Copy(SelectableTile.TileNormalSize)
    let layoutCenter = Vector.Add(Vector.Scale(GameGlobal.ScreenSize, 0.5), this.LayoutBias)
    let centerPos = new Vector((SelectableTile.ColumnCount - 1) / 2, (SelectableTile.RowCount - 1) / 2)
    let relativePos = Vector.Subtract(new Vector(selectableTile.Column, selectableTile.Row), centerPos)
    let targetPos = Vector.Add(layoutCenter, Vector.VectorScale(relativePos, Vector.Add(SelectableTile.TileNormalSize, new Vector(SelectableTile.TileMargin, SelectableTile.TileMargin))))
    transform.Position = Vector.Copy(targetPos)
  }
}