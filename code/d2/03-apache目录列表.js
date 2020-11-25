var http = require('http')
var fs = require('fs')

var server = http.createServer()


var wwwDir = 'E:/www'

server.on('request',function(req,res){
	var url = req.url
	fs.readFile('./template.html',function(err,data){
		if (err) {
			return res.end('404')
		}
		fs.readdir(wwwDir,function(err,files){
			if (err) {
				return res.end('404')
			}

			//生成需要替换的内容
			var content = ''
			files.forEach(function(item){
				content += `
				<tr>
				<td data-value="img/"><a class="icon dir" href="/E:/www/img/">${item}/</a></td>
    			<td class="detailsColumn" data-value="0"></td>
                <td class="detailsColumn" data-value="1606304314">2020/11/25 下午7:38:34</td>
                </tr>
				`
			})

			//替换
			data = data.toString()
			data = data.replace('^_^',content)

			res.end(data)
		})
	})
})

server.listen(6324,function(){
	console.log('server is running..')
})