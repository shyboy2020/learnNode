# express

> 基于Node的web开发框架，为了提高开发效率

## *修改完代码自动重启

`nodemon`基于Node开发的第三方命令行工具，解决频繁修改代码重启服务器问题

```javascript
//--global安装的包可在任意目录执行
npm install --global nodemon
```

安装完毕之后，在终端使用:

```javascript
nodemon 文件名
```

## 1.基本路由

> 请求方式
>
> 请求路径
>
> 请求处理函数

### get:

```javascript
app.get('/',function(req,res){
    res.send('GET A GET REQUEST')
})
```

### post:

```javascript
app.post('/',function(req,res){
    res.send('GET A POST REQUEST')
})
```

## 2.静态服务

> 开放指定的目录

```javascript
//当以/public/开头的时候，去 ./public/ 目录中找对应的文件
app.use('/public',express.static('./public/'))


//当省略第一个参数的时候，则可以通过省略/public来访问public中的文件
app.use(express.static('./public/'))
```

## 3.在express中使用art-template

安装

```javascript
npm i -S art-template
npm i -S express-art-template
```

配置

```javascript
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
```

使用

```javascript
app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments
	})
})
```

## 4.在express中获取表单get请求体数据

express内置了获取表单GET请求体的API，直接通过`req.query`获取

```javascript
req.query
```

## 5.在express中获取表单post请求体数据

在express中没有内置获取表单POST请求体的API，需要使用第三方包`body-parser`

安装

```javascript
npm install body-parser
```

配置

```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

使用

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

