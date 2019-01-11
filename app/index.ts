/*
  为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。
  export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
  若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
*/

import Koa = require('koa')