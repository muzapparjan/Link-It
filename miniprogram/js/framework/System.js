/**
 * System.js
 * HUST CS1801 Muzappar
 * 2020-10-28
 */

/** 系统类 */
export default class System {
  /**
   * 创建一个新系统
   * @param {String} name 名称
   * @param {Number} priority 优先级
   * @param {Function} matchFunction 匹配函数
   * @param {Function} executionFunction 规则函数
   * @param {Boolean} synchronous 是否同步迭代
   * @param {Function} sortMethod 同步迭代前的排序方法
   */
  constructor(name, priority = 0.0, matchFunction = null, executionFunction = null, synchronous = false, sortMethod = null) {
    /** 系统名 */
    this.Name = name
    /** 系统优先级 */
    this.Priority = priority
    /** 匹配函数 */
    this.MatchFunction = matchFunction
    /** 规则函数 */
    this.ExecutionFunction = executionFunction
    /** 已匹配的实体列表 */
    this.MatchedEntities = new Array()
    /** 命令缓冲 */
    this.CommandBuffer = new Array()
    /** 是否同步有序迭代 */
    this.Synchronous = synchronous
    /** 同步更新前的排序方法 */
    this.SortMethod = sortMethod
  }
  /**
   * 执行系统规则，迭代更新
   * @param {Number} deltaTime 更新间隔时长
   */
  Execute(deltaTime) {
    if (this.ExecutionFunction == null)
      return
    if (this.Synchronous) {
      if (this.SortMethod != null && this.SortMethod != undefined)
        this.MatchedEntities.sort(this.SortMethod)
      for (let i = 0; i < this.MatchedEntities.length; i++)
        this.ExecutionFunction(this.MatchedEntities[i], deltaTime)
    }
    else {
      this.MatchedEntities.forEach(entity => {
        this.ExecutionFunction(entity, deltaTime)
      })
    }
    this.CommandBuffer.forEach(command => {
      command()
    })
    this.CommandBuffer.length = 0
  }
  /**
   * 尝试匹配实体到规则
   * @param {Entity}} entity 要匹配的实体
   */
  TryMatch(entity) {
    if (this.MatchFunction == null)
      return
    let index = this.MatchedEntities.indexOf(entity)
    if (index > -1) {
      if (!this.MatchFunction(entity))
        this.MatchedEntities.splice(index, 1)
    } else {
      if (this.MatchFunction(entity))
        this.MatchedEntities.push(entity)
    }
  }
}