#  数据库结构

### 依赖包
- koa
- koa-static-cache
- sequelize
- sequelize-cli
- md5
- mysql2
- moment
- koa-controllers
- reflect-metadata

### sequelize 库
  - sequelize-cli  用来做数据库迁移

#### 参考资料
>http://docs.sequelizejs.com/manual/tutorial/migrations.html

### 初始化数据库
> node_modules/.bin/sequelize init

初始化
- config : 配置目录
- migrations : 迁移文件（数据库结构）
- seeders : 种子文件 （生成测试数据）
- models : 模型文件


#### 创建数据库
> node_modules/.bin/sequelize db:create

### 创建数据库迁移文件
> node_modules/.bin/sequelize migration:create --name user
### 迁移
> node_modules/.bin/sequelize db:migrate
### 撤销迁移
> node_modules/.bin/sequelize db:migrate:undo

### 撤销所有的迁移
> node_modules/.bin/sequelize db:migrate:undo:all

### 撤销指定的迁移
> node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

### 创建种子
> node_modules/.bin/sequelize seed:generate --name demo-user

### 运行种子
> node_modules/.bin/sequelize db:seed:all

### 撤销种子
> node_modules/.bin/sequelize db:seed:undo:all

#### 数据库结构
- user : 用户表

- user-profile : 用户扩展信息

- login-log : 用户登录日志

- category : 美食分类

- cookbook : 美食信息

- setp : 步骤

- comment : 评论表

- fovorite : 收藏

#### 关于TS的坑

- ts默认不会导入json文件，需要配置
  - 配置声明文件  @myself-types/json.d.ts
  - tsconfig.json  ->  "include": [ "./@myself-types/**/*" 将声明文件也要引入]