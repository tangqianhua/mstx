#  数据库结构

### sequelize 库
  - sequelize-cli 用来做数据库迁移

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

#### 数据库结构
- user : 用户表

- user-profile : 用户扩展信息

- login-log : 用户登录日志

- category : 美食分类

- cookbook : 美食信息

- setp : 步骤

- comment : 评论表

- fovorite : 收藏