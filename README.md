# 用来开发和打包组件的webpack配置
webpack不仅提供了的项目打包的流程，也支持创建一个外部库，同时可以通过webpack强大的插件机制解决加载非js模块的问题。这样使我们开发组件和开发项目有一样的流程和体验。

## 使用方法
首先，使用`talent-ui-component-webpack-config`可以通过传递简单的参数，来得到全套的webpack组件开发的配置。所以我们要在组件项目中配置使用webpack.

### 添加webpack.config.js
```js
const path = require('path');
module.exports = require('../index.js')({
    root: path.resolve(__dirname),
    entry: './src/index.js'
})
```

### 开发组件代码

### 构建项目
> 在构建项目的时候，`talent-ui-component-webpack-config`会读取项目package.json中的name字段作为library的名字，比如package.json中的名字叫作example-component，那么library就叫做exampleComponent

> 同时会了达到最好的兼容性，libraryTarget的值设置为了umd。

> 输出目录为dist, 输出文件分为三部分， dist/js, [style.css和assets (放置字段图片等其他资源)]。组件的package.json中的main应该指向dist/index.js。如果要引入组件的css，请在**项目**执行下面的引用

```js
    import css from 'example-component/dist/style.css'
    //other code
```

## 配置参数

> `root` 组件项目的根目录，物理路径

> entry: 组件的入口文件，必须

> name: library的名字，可不传，默认为package.json中的name字段

> compress: 是否启用压缩，默认为flase
