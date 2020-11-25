var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
	var url = req.url
	if (url === '/') {
		res.end('index page')
	} else if (url === '/login') {
		res.end('login page')
	} else if (url === '/goods') {
		var goods = [
			{
				name:'wo',
				age:12
			},
			{
				name:'ni',
				age:15
			},
			{
				name:'ta',
			}
		]
		res.end(JSON.stringify(goods))
	} else {
		res.end('404 Not Found')
	}
})

server.listen(6324,function(){
	console.log('服务器启动成功http://127.0.0.1:6324')
})