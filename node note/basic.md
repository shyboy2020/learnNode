# Node.js是什么

- Node.js不是语言、库、框架,而是JavaScript运行时的环境
- 可以完全脱离浏览器来运行，来解析与执行JavaScript代码
- Node.js中没有BOM,DOM，有ES标准(所以没有window、document)
- 提供服务器级别的操作API，如：文件读写、网络协议的构建、网络通信、http服务器
- Node.js使用事件驱动、非阻塞IO模型，具有轻量高效特点





# 读取文件

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

# 写入文件

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



# http

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

