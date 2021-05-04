# `工程搭建第二天`
### `一.Css`
#### 1.选项

`css.sourceMap`：是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
                
`css.extract`：是否将组件中的 CSS 提取至一个独立的 CSS 文件中。

`css.loaderOptions`：向 CSS 相关的 loader 传递选项。
`loaderOptions: {
    css: {
       // 这里的选项会传递给 css-loader
    },
    postcss: {
       // 这里的选项会传递给 postcss-loader
    }
}`

### `一.configureWebpack和chainWebpack`

#### 1.configureWebpack概念

如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。

如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。

#### 2.configureWebpack一般配置

使用函数形式通过参数config获取选项采取不同的方式进行合并或者进行直接修改
`config.resolve.extensions = [.js", ".jsx", ".vue", ".json];`直接修改原始

`config.module.noParse = /^(vue|vue-router|vuex|vuex-router-sync)$/;`直接修改原始

`Object.assign(config.module, {})`合并配置

#### 3.chainWebpack

是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
