
# WeChat Mini Program

## Features

   * 使用 typescript 和 scss 编写微信小程序
   * 支持同一工程打包成不同的 app。如：在同一工程下打包成管理端（admin）和客户端（client）的 app
   * 支持 lint 规则检测

## Quickstart

  * ` yarn start ` 启动 webpack 开发微信小程序项目，可自动监听文件变化并重新编译，默认启动客户端
  * ` yarn start:admin ` 启动 webpack 开发微信小程序管理端类型的项目，可自动监听文件变化并重新编译
  * ` yarn build ` 编译生成 production 环境的代码到 dist/client 目录
  * ` yarn build:admin ` 编译生成 production 环境的代码到 dist/admin 目录
  * ` yarn lint ` 执行 lint 规则检测和修复

## Configuration

  不同类型的 app 配置可在 `config/app.[admin | client].json` 中设置，在运行 webpack 前会根据执行命令的参数将对应的配置复制到 `src/app.json` 文件

## Links

[wxapp-webpack-plugin](https://github.com/Cap32/wxapp-webpack-plugin)

[微信小程序webpack模板](https://github.com/fupengl/quickstart-miniprogram)


## License

MIT
