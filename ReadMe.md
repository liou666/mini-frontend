#### Demo

- `Host` 目录是基座项目，加载远程路由并做相应处理。
- `BaseCenter` 目录是项目的中转服务，每个子项目启动时会加载中转服务中暴露的方法，在中转服务中暴露的方法中将追加路由对象。
- `AppOne` 与 `AppTwo` 目录是项目的远程子项目。

> 注：`webpack-serve-dev@4` 貌似不兼容 webpack-cli

#### Test

`Test`目录提供的是静态导入案例，由 `App1` 静态加载 `App2` 与 `App3` 的服务。

#### ToDoList

- [x] 静态加载 remote
- [x] 动态加载 remote
- [x] 微前端（基本跑通）
- [ ] 微前端（完善项目功能，）
- [ ] react-in-vue
