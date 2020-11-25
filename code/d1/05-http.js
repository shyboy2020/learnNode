//1.加载http模块
var http = require('http')
//2.使用http.createServer()方法创建一个Web服务器，返回一个Server实例
var server = http.createServer()
//3.触发服务器的request请求事件，然后执行回调函数
//回调函数: request和response
server.on('request',function(request,response){
    console.log('收到客户端请求,请求路径: '+ request.url)

    //response中write方法给客户端发送响应数据，用end结尾
    // response.write('shab')
    // response.end()
    //简洁方法
    response.end('shab')
})
//4.绑定端口号，启动服务器
server.listen(6324,function(){
    console.log('服务器启动成功http://127.0.0.1:6324')
})