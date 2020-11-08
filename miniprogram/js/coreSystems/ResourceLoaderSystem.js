/**
 * ResourceLoaderSystem.js
 * HUST CS1801 Muzappar
 * 2020-11-7
 */

import System from "../framework/System"
import Entity from "../framework/Entity"
import Texture from "../util/Texture"
import AudioClip from "../util/AudioClip"

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
    return entity.CheckComponentByName("ResourceLoader") && entity.CheckComponentByName("ResourcePool")
  }
  /**
   * 系统规则：根据资源加载器的数据加载资源
   * @param {Entity} entity 遵循规则的实体
   * @param {Number} deltaTime 两次更新间隔时长
   */
  static ExecutionFunction(entity, deltaTime) {
    let resourceLoader = entity.GetComponentByName("ResourceLoader")
    let resourcePool = entity.GetComponentByName("ResourcePool")
    if (resourceLoader == null || resourceLoader == undefined)
      return
    if (resourcePool == null || resourcePool == undefined)
      return
    resourceLoader.TexturePathList.forEach(path => {
      for (let i = 0; i < resourcePool.TexturePool.length; i++)
        if (resourcePool.TexturePool[i].Path == path)
          return
      resourcePool.TexturePool.push(new Texture(path))
    });
    resourceLoader.TexturePathList.length = 0
    resourceLoader.AudioPathList.forEach(path => {
      for (let i = 0; i < resourcePool.AudioPool.length; i++)
        if (resourcePool.AudioPool[i].Path == path)
          return
      resourcePool.AudioPool.push(new AudioClip(path))
    });
    resourceLoader.AudioPathList.length = 0
  }
}