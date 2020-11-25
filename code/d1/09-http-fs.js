var http = require('http')
var fs = require('fs')


var server = http.createServer()

server.on('request',function(req,res){
	var url = req.url
	if (url==='/') {
		fs.readFile('./resource/index.html',function(err,data){
		if (err) {
			res.setHeader('Content-Type','text/plain; charset=utf-8')
			res.end('文件读取失败')
		} else {
			//data默认是二进制数据，可以通过toString转为字符串
			//res.end()支持二进制、字符串
			res.setHeader('Content-Type','text/html; charset=utf-8')
			res.end(data)
		}
	})
	} else if (url === '/sexy') {
		fs.readFile('./resource/sexy.jpg',function(err,data){
		if (err) {
			res.setHeader('Content-Type','text/plain; charset=utf-8')
			res.end('文件读取失败')
		} else {
			//data默认是二进制数据，可以通过toString转为字符串
			//res.end()支持二进制、字符串
			res.setHeader('Content-Type','image/jpeg')
			res.end(data)
		}
	})
	}
})

server.listen(6324,function(){
	console.log('Server is running ...')
})