var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
	var url = req.url
	if (url === '/') {
		res.setHeader('Content-Type','text/plain; charset=utf-8')
		res.end('hello 傻逼')
	} else {
		res.end('404')
	}
})

server.listen(6324,function(){
	console.log('Server is running ...')
})