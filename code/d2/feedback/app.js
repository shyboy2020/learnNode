var http = require('http')
var fs = require('fs')

//链式调用
http
	.createServer(function(req,res){
		var url = req.url
		if (url === '/') {
			fs.readFile('./views/index.html',function(err,data){
				if (err) {
					return res.end('404')
				}
				res.end(data)
			})
		}
	})
	.listen(6324,function(){
		console.log('server is running...')
	})