var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()


var wwwDir = 'E:/www'

server.on('request',function(req,res){
	var url = req.url
	fs.readFile('./template-apache.html',function(err,data){
		if (err) {
			return res.end('404')
		}
		fs.readdir(wwwDir,function(err,files){
			if (err) {
				return res.end('404')
			}

			//使用模板引擎解析替换data中的模板字符串
			var htmlStr = template.render(data.toString(),{
				title:'test',
				files:files
			})

			//发送解析替换过后的响应数据
			res.end(htmlStr)
		})
	})
})

server.listen(6324,function(){
	console.log('server is running..')
})