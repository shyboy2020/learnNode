# Node中的模块系统

> 主要使用
>
> - ES语言
> - 核心模块
>   - 文件操作的fs
>   - http服务的http
>   - url路径操作模块
>   - path路径操作模块
>   - os操作系统信息模块
> - 第三方模块(必须通过npm来下载使用)
>   - art-template 
> - 自己写的模块

## 1.什么是模块化

- 文件作用域
- 通信规则
  - 加载require
  - 导出

## 2.Commonjs模块规范

在Node中的JavaScript有一个重要的概念：模块系统

- 模块作用域
- 使用require方法加载模块
- 使用exports接口对象用来导出模块中的成员

### 2.1加载`require`

语法：

```javascript
var 自定义变量名称 = require('模块')
```

两个作用：

- 执行被加载模块中的代码
  - 得到被加载模块中的`exports`导出接口对象

### 2.2导出`exports`

- Node中是模块作用域，默认文件中所有的成员旨在当前文件模块有效
- 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到`exports`接口对象中

导出多个成员(必须在对象中):

```javascript
exports.a = 123
exports.b = 'hello'
exports.c = function(){
    console.log('ccc')
}
exports.d = {
    foo:'bar'
}
```



导出单个成员(拿到的是函数、字符串):

```javascript
module.exports = 'hello'
```

但是默认会覆盖

```javascript
module.exports = 'hello'

//下面的函数会覆盖上面的字符串
module.exports = function(x,y){
    return x + y
}
```

使用对象导出多个成员

```javascript
module.exports = {
	add: function(){
		return x + y
	},
	str:'hello'
}
```

### 2.3原理解析

### 2.4 require加载规则

> - 优先从缓存加载
> - 判断模块表示
>   - 核心模块
>     - 本质也是文件，不过已经被编译到二进制文件中 了，只需要按名字加载就行
>     - require(‘fs)
>   - 第三方模块
>     - 都是通过npm来下载,存在文件所在目录中的node_modules目录
>     - 通过require('包名’)进行加载使用
>   - 自己定义的模块
>     - ./  当前目录
>     - ../ 上一级目录

### 2.5 npm

node package manager

### 2.6 package.json

每个项目都需要有一个`package.json`文件

通过`npm init`自动初始化


