# `工程搭建第一天`
### `一.配置文件`
1.环境文件

`base环境.env、开发环境.env.production、生产环境.env.development`

2.环境文件规范

`配置文件中的环境变量必须以VUE_APP_ 开头，一个环境文件只包含环境变量的“键=值”对`

3.加载策略

`不管什么模式，都会去加载 .env 配置文件`

`Staging 模式：环境变量文件名.env.Staging,对应package.json "test": "vue-cli-service serve --mode Staging",默认server 对应development ，build 对应production`

`根据不同环境命令加载不同环境下的文件，同时覆盖.env文件相同环境变量`







