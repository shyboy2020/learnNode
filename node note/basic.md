# 1.Node.js是什么

- Node.js不是语言、库、框架,而是JavaScript运行时的环境
- 可以完全脱离浏览器来运行，来解析与执行JavaScript代码
- Node.js中没有BOM,DOM，有ES标准(所以没有window、document)
  - 有变量、方法、数据类型、内置对象、Array、Object、Date、Math
- 提供服务器级别的操作API，如：文件读写、网络协议的构建、网络通信、http服务器
- Node.js使用事件驱动、非阻塞IO模型，具有轻量高效特点





# 2.读取文件

node中的JavaScript具有文件操作的能力

**如何进行文件操作**

1. ​	先引入fs(filesystem文件系统)核心模块

   ```javascript
   var fs = require('fs')
   ```

2. 2.读取文件  第一个参数时读取文件的路径
   第二个参数是一个回调函数  error和data
   成功：  data=数据    error=null
   失败：  data=null   error=错误对象

   ```javascript
   fs.readFile('../data/hello.txt',function(error,data){
   	if(error){
   		console.log('读取文件失败')
   	} else {
   		console.log(data.toString())
   	}
   	//得到十六进制数据<Buffer 68 65 6c 6c 6f 
   	//20 6e 6f 64 65 6a 73 20 ef bc 9a ef bc 89>
   })
   ```

# 3.写入文件

```javascript
var fs = require('fs')

//第一个参数:文件路径
//第二个参数:文件内容
//第三个参数:回调函数 error
fs.writeFile('../data/write.md','test writein',function(error){
	if (error) {
		console.log('writein failed')
	} else {
		console.log('writein successed')
	}
})	
```



# 4.http

> node可以使用http模块创建和编写一个服务器
>
> 服务器作用:提供对数据的服务、发送请求、接受请求、处理请求、发送响应

1.加载http模块

```javascript
var http = require('http')
```

2.使用http.createServer()方法创建一个Web服务器，返回一个Server实例

```javascript
var server = http.createServer()
```

3.触发服务器的request请求事件，然后执行回调函数

   回调函数: request和response

```javascript
server.on('request',function(request,response){
    console.log('收到客户端请求,请求路径: '+ request.url)

    //response中write方法给客户端发送响应数据，用end结尾
    // response.write('shab')
    // response.end()
    //简洁方法
    response.end('shab')
})
```

4.绑定端口号，启动服务器

```javascript
server.listen(6324,function(){
    console.log('服务器启动成功http://127.0.0.1:6324')
})
```

# 5.Node中的JavaScript

> Node中没有全局作用域的概念，是文件与文件之间的模块作用域，避免了变量污染的问题
>
> 1. 模块完全封闭
> 2. 外部无法访问内部
> 3. 内部无法访问外部
>
> 但是可以通过exports和require进行模块通信

## 5.1核心模块

文件操纵的`fs`核心模块，http服务构建的`http`模块，`path`路径操作模块，`os`操作系统信息模块

```javascript
//加载模块
var fs = require('fs')
//使用模块中的方法
fs.xxx()
```

## 5.2自定义模块

require

exports

## 5.3第三方模块

# 6.Web服务器开发

## 6.1 ip地址和端口号

- ip地址用来定位计算机

- 端口号用来定位具体的应用程序
- 一切需要联网通信的软件都会占用一个端口号
- 端口号的范围从0~65536之间
- 在计算机中有一些默认端口号，最好不要去使用
  - 列入http服务的80

## 6.2 Content-Type

- 服务器需要将每次响应的数据是什么内容类型告知客户端
- https://tool.oschina.net/commons 内容类型对应数据   参考
- 对于文本类型，加上编码charset=utf-8，防止乱码

# 客户端渲染和服务端渲染

- 客户端渲染不利于SEO搜索引擎优化
  - 客户端最少两次请求，发起ajax在客户端使用模板引擎渲染
- 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  - 而客户端拿到的就是服务端已经渲染好的
- 所以大多数网站是客户端和服务端渲染结合的
- 所以服务端是为了SEO搜索引擎优化

# 网络请求相关

## 如何解析请求路径中的查询字符串

> 使用node中的url模块
>
> 比如http://www.baidu.com/a?v=1&x=2
>
> url.parse()

## 在Node中实现服务器重定向

> 301 永久重定向  浏览器会记住
>
> 302 临时重定向	浏览器不记忆
>
> statusCode = 301
>
> setHeader("Location",'重定向路径')



# Node中的REPL使用

在终端任意路径执行`node`

功能类似与浏览器中的console





