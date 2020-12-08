# blog-node-mongodb

## 1.项目结构设计

- node_modules：存放项目所需要的包文件
- public：存放公共开放的静态资源(img、css、js)
- views：存放默认的展示页面文件
- app.js：进口文件

```javascript
.
├── app.js
├── controllers
├── models				存放数据模型user、topic、comment
├── node_modules        第三方包
├── package-lock.json	第三方包版本锁定文件
├── package.json		包描述文件
├── public				公共的静态资源
├── README.md			项目说明文档
├── routes				
└── views				存储视图目录
```



## 2.模板页

> art-template 模板继承和子模板

```javascript
//layout.html作为模板

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
<!--    可填充样式，默认无-->
    {{ block 'head' }}{{ /block }}
</head>
<body>
<!--    子模板作为头部-->
    {{ include './header.html' }}

    {{ block 'content' }}
        <h1>默认内容</h1>
    {{ /block }}

<!--    子模板作为尾部-->
    {{ include './footer.html' }}

    <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="node_modules/jquery/dist/jquery.js"></script>
<!--    可填充具体脚本，默认无-->
    {{ block 'script' }}{{ /block }}
</body>
</html>
```



```javascript
//index.html 首页

<!--继承layout的模板-->
{{ extend './layout.html' }}

<!--填充插槽-->
{{ block 'content' }}
    <div>
        <h1>主页内容</h1>
    </div>
{{ /block }}
```



```javascript
//list.html  列表页

{{ extend './layout.html' }}

{{ block 'content' }}
<div>
    <h1>列表页内容</h1>
</div>
{{ /block }}
```



```javascript
//head.html
//footer.html

<div>
    <h1>头部的内容</h1>
</div>

<div>
    <h1>尾部的内容</h1>
</div>
```



## 3.路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要登录 | 备注         |
| --------- | ---- | ------- | ------------------------- | ------------ | ------------ |
| /         | GET  |         |                           |              | 渲染首页     |
| /register | GET  |         |                           |              | 渲染注册页面 |
| /register | POST |         | email、nickname、password |              | 处理注册请求 |
| /login    | GET  |         |                           |              | 渲染登录页面 |
| /login    | POST |         | email、password           |              | 处理登录请求 |
| /logout   | GET  |         |                           |              | 处理退出请求 |



## 4.模型设计

## 5.功能实现

### 在express中使用`express-session`保存登录状态

安装

```javascript
npm i express-session
```

配置

```javascript
app.use(session({
    //配置加密字符串，在原有的加密基础上和这个字符串拼接加密
    //为了增加安全性
    secret: 'gundam',
    resave: false,
    saveUninitialized: true
}))
```

使用

```javascript
//添加登录信息
req.session.user = data

//使用登录信息
req.session.user

//删除登录信息
req.session.user = null
//更严谨
delete req.session.user
```

## Express 中间件

> 调用封装好的方法
>
> 要考虑调用顺序

### 应用程序级别中间件

万能匹配(不关心任何请求路径和请求方法)

```javascript
app.use(function(req,res,next){
    console.log('Time:',Date.now())
    next()
})
```

以'/xxx/'开头的

```javascript
app.use('/a',function(req,res,next){
    console.log('Time:',Date.now())
    next()
})
```

### 路由级别中间件

get:

```javascript
app.get('/',function(req,res){
    res.send('hello world')
})
```

post:

```java
app.post('/',function(req,res){
    res.send('POST')
})
```

put:

```javascript
app.put('/user',function(req,res){
    res.send('PUT at /user')
})
```

delete:

```javascript
app.delete('/user',function(req,res){
    res.send('Delete at /user')
})
```



### 错误处理中间件

```javascript
app.use(function(err,req,res,next){
   console.error(err.stack)
    res.status(500).send('Something broke')
})
```

### 内置中间件

- express.static
- express.json
- exoress.urlencoded

### 第三方中间件

- body-parser
- compression
- cookie-parser
- morgan
- response-time
- serve-static
- session