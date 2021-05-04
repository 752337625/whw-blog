# `工程搭建第二天`
### `一.lintOnSave`
#### 1.概念

是否在开发环境下通过 `eslint-loader` 在每次保存时 lint 代码。这个值会在` @vue/cli-plugin-eslint` 被安装之后生效。

#### 2.规范

检测到代码不规范出警告，编译成功

检测到代码不规范出警告，编译不成功成功

#### 3.配置策略

开发环境建议开启，`devServer{ overlay: { errors: true，warnings: true}`}

生产环境建议关闭 `lintOnSave ： process.env.NODE_ENV !== 'production'`

### 二.获取当前运行环境

`process.env.NODE_ENV`

### 三.DevServer

#### 1.俩种模式

`在开发中，我们希望边写代码，边看到代码的执行情况，`webpack-dev-server `提供自动刷新页面的功能可以满足我们的需求。webpack-dev-server 支持两种模式的自动刷新页面。
 
 `iframe 模式`：页面被放到一个 `iframe` 内，当发生变化时，会重新加载；
 
 `inline 模式`：将 `webpack-dev-server` 的重载代码添加到产出的 `bundle` 中。
 
 两种模式都支持模块热替换（Hot Module Replacement）。模块热替换的好处是只替换更新的部分，而不是整个页面都重新加载。`
 
#### 2.Hot Module Replacement
HMR 即模块热替换（Hot Module Replacement）的简称，它可以在应用运行的时候，不需要刷新页面，就可以直接替换、增删模块。

Webpack 可以通过配置 webpack.HotModuleReplacementPlugin 插件来开启全局的 HMR 能力，开启后 bundle 文件会变大一些，因为它加入了一个小型的 HMR 运行时（runtime），当你的应用在运行的时候，Webpack 监听到文件变更并重新打包模块时，HMR 会判断这些模块是否接受 update，若允许，则发信号通知应用进行热替换。

要开启 HMR 功能，需要三步：

1.设置 `devServer.hot=true，devServer.inline=true（默认`）；

`devServer.hot=true：`会给 `entry` 添加 `webpack/hot/dev-serve或者webpack/hot/only-dev-serve（devServer.hotOnly=true）`，这个是实现 HMR 的服务端代码；
`devServer.inline=true：`会给 `entry` 添加`webpack-dev-server/client`，这是通信客户端；

2.在 `webpack.config.js` 中添加` plugins：new webpack.HotModuleReplacementPlugin()`；

3.修改入口文件添加 HMR 支持代码：

// 在入口文件 index.js 最后添加如下代码
`if(module.hot){
// 通知 webpack 该模块接受 hmr
module.hot.accept(err => {
    if(err) {
      console.log(err);
    }
  });
} `

经过上面配置之后，再次执行 webpack-dev-server，打开http://localhost:3000，然后修改 index.js 内容，就能看到效果了。

`Tips：使用 webpack-dev-server 的 CLI 功能只需要命令行中添加--hot，webpack-dev-server 会自动将webpack.HotModuleReplacementPlugin 这个插件添加到 Webpack 的配置中去，
所以开启 HotModuleReplacementPlugin 最简单的方式就是使用 inline 模式（命令行添加 --inline）。 `
 
#### 3.Webpack Dev Server 常用配置
`devServer.historyApiFallback`：配置如果找不到页面就默认显示的页面；

`devServer.compress`：启用 gzip 压缩；

`devServer.hotOnly`：构建失败的时候是否不允许回退到使用刷新网页；

`devServer.inline`：模式切换，默认为内联模式，使用false切换到 iframe 模式；

`devServer.open`：启动后，是否自动使用浏览器打开首页；

`devServer.openPage`：启动后，自动使用浏览器打开设置的页面；

`devServer.overlay`：是否允许使用全屏覆盖的方式显示编译错误，默认不允许；

`devServer.port`：监听端口号，默认 8080；

`devServer.host`：指定 host，使用0.0.0.0可以让局域网内可访问；

`devServer.contentBase`：告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要；

`devServer.publicPath`：设置内存中的打包文件的虚拟路径映射，区别于 output.publicPath；

`devServer.https`：DevServer 默认使用 HTTP 协议服务，它也能通过 HTTPS 协议服务。 有些情况下你必须使用 HTTPS，例如 HTTP2 和 Service Worker 就必须运行在 HTTPS 之上。 要切换成 HTTPS 服务，最简单的方式是`https true`，DevServer 会自动的为你生成一份 HTTPS 证书。

`devServer.disableHostCheck`：配置项用于配置是否关闭用于DNS重绑定的HTTP请求的host检查。DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。 它通常用于搭配 --host 0.0.0.0 使用，因为你想要其它设备访问你本地的服务，但访问时是直接通过 IP 地址访问而不是 HOST 访问，所以需要关闭 HOST 检查。

`devServer.clientLogLevel`： 配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台里看到的日志内容。 clientLogLevel 是枚举类型，可取如下之一的值 none | error | warning | info。 默认为 info 级别，即输出所有类型的日志，设置成 none 可以不输出任何日志。


