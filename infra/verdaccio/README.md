# Verdaccio 私仓

## 本地启动

```sh
bun run registry:start
```

首次发布前，在另一个终端创建发布账号：

```sh
bun run registry:login
```

服务地址为 `http://127.0.0.1:4873`，管理界面为同一地址。

`storage/` 和 `htpasswd` 是运行时数据，不能提交 Git。生产环境需要将它们挂载到持久化磁盘，并将服务交给 systemd、PM2 或 Docker 管理。

`max_users` 当前设置为 `1000`，允许首次通过 `npm adduser` 创建发布账号。完成团队账号初始化后，应改为 `-1` 禁止自助注册。
