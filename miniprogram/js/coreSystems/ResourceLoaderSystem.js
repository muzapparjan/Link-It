/**
 * ResourceLoaderSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Texture from "../util/Texture"

/** 资源加载系统 */
export default class ResourceLoaderSystem extends System {
  /** 创建一个新的资源加载系统 */
  constructor() {
    super("ResourceLoaderSystem", 10.0, ResourceLoaderSystem.MatchFunction, ResourceLoaderSystem.ExecutionFunction)
  }
  /**
   * 尝试匹配实体
   * @param {Entity} entity 要匹配的实体
   * @returns {Boolean} 是否匹配成功
   */
  static MatchFunction(entity) {
    return entity.CheckComponentByName("ResourceLoader")
  }
  /**
   * 系统规则：根据资源加载器的数据加载资源
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let resourceLoader = entity.GetComponentByName("ResourceLoader")

    let resourcePoolEntity = entity.World.FindEntityByRequiredComponentName("ResourcePool")
    if (resourcePoolEntity == null || resourcePoolEntity == undefined)
      return
    let resourcePool = resourcePoolEntity.GetComponentByName("ResourcePool")
    if (resourcePool == null || resourcePool == undefined)
      return

    resourceLoader.TexturePathList.forEach(path => {
      for (let i = 0; i < resourcePool.TexturePool.length; i++)
        if (resourcePool.TexturePool[i].Path == path)
          return
      resourcePool.TexturePool.push(new Texture(path))
    });
    resourceLoader.TexturePathList.length = 0

    this.CommandBuffer.push(() => {
      entity.RemoveComponent(resourceLoader)
    })
  }
}