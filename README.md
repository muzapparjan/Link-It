# 微信端ECS架构连连看

____

### 简介

* 这是作者大三上学期的软件工程课设，笔法稚嫩，有不少瑕疵，还望海涵。
* 这个项目的代码部分没有任何使用协议。如果非要说有，那就是WTFPL。
* 项目用到的美术、音频素材均来自互联网，仅供学习，请勿商用。
* 翻文件突然翻到这个项目，心血来潮上传了一波~
* 那个。。我想要Star，你能给我吗？

____

### 项目组织结构

* 核心代码`./miniprogram/js/`
  * 主循环：`./main.js`
  * ECS核心框架：`./framework/`
    * 实体：`./Entity.js`
    * 组件：`./Component.js`
    * 系统：`./System.js`
    * 世界：`./World.js`
  * 核心组件：`./coreComponents/`
  * 核心系统：`./coreSystems/`
  * 连连看相关的逻辑性组件：`./logicalComponents/`
  * 连连看相关的逻辑性系统：`./logicalSystems/`
  * 世界预设：`./worlds/`