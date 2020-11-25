var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
	//服务器默认发送的时UTF-8编码的数据
	//浏览器会以中文默认操作系统GBK，所以呈现乱码
	//必须告知使用UTF-8
	// res.setHeader('Content-Type','text/plain; charset=utf-8')
	// res.end('你好世界')
	var url = req.url

	if (url === '/plain') {
		//text/plain是普通文本
		res.setHeader('Content-Type','text/plain; charset=utf-8')
		res.end('你好世界')
	} else if (url === '/html') {
		//text/html是html格式的字符串
		res.setHeader('Content-Type','text/html; charset=utf-8')
		res.end('<p>你好world <a href="">点我</a></p>')
	}
})

server.listen(6324,function(){
	console.log('Server is running ...')
})