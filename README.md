# 宿舍管理系统

### 学生宿舍管理系统说明

> 1、主要是针对现如今学生日益增多，学校宿舍多，难以管理的现状所设计的一款宿舍管理软件，设计目标主要包括管理员模块、学生模块、宿舍模块、后台管理模块三大模块。其中：


>2、管理员模块的主要功能是学生宿舍信息添加、外来人员登记管理、贵重物品出入管理、学生晚归登记管理、宿舍公告发布等功能；


>3、学生模块的功能主要包括学生登录、学生宿舍信息查看、学生晚归信息查看等功能；


>4、宿舍模块包括宿舍信息查询、宿舍内景查看、宿舍水电费缴纳及缴费查看；后台管理模块包括管理员的录入与删除等功能


>5、后台管理模块包括楼栋管理员的添加与删除等功能

### 项目架构
> 整个系统所用的技术框架为react + react-router + es6 + mongoose + node + express + webpack + scss

### 服务启动
* 启动`mongodb`
* `npm install` 安装项目依赖
* `npm start`  启动后端服务
* `npm run dev` 启动前端页面

```JavaScript
  在浏览器地址栏输入 http://localhost:8088/ 查看项目
```

### 用户权限管理

> jwt + expressJwt + mongodb + node 实现安全认证 + 权限等级认证
