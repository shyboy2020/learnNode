var http = require('http')
var fs = require('fs')
var artTemplate = require('art-template')
var url = require('url')

//链式调用
var comments = [
	{
		name:'wh',
		message:'傻逼',
		detaTime:'2020-20-20'
	},
	{
		name:'wh1',
		message:'楼上+1',
		detaTime:'2020-20-20'
	},
	{
		name:'wh2',
		message:'楼上+2',
		detaTime:'2020-20-20'
	}
]

http
	.createServer(function(req,res){
		//url.parse方法解析路径，第三个参数表示把查询字符串转为对象
		var parseObj = url.parse(req.url,true)
		//单独获取不包含查询字符串的路径部分
		var pathname = parseObj.pathname


		if (pathname === '/') {
			fs.readFile('./views/index.html',function(err,data){
				if (err) {
					return res.end('404')
				}

				//模板渲染
				var htmlStr = artTemplate.render(data.toString(),{
					comments:comments
				})
				res.end(htmlStr)
			})
		} else if(pathname === '/post'){
			fs.readFile('./views/post.html',function(err,data){
				if (err) {
					return res.end('404')
				}
				res.end(data)
			})
		} else if (pathname.indexOf('/public/') === 0) {
			fs.readFile('.' + pathname,function(err,data){
				if (err) {
					return res.end('404')
				}
				res.end(data)
			})
		} else if (pathname === '/pinglun') {
			// console.log('收到表单信息',parseObj.query)

			//将url.parise方法得到的请求路径中的查询字符串解析成一个对象

			// res.end(JSON.stringify(parseObj.query))

			//将新数据存储到comments数组中
			var newComment = parseObj.query
			newComment.dataTime = '2020-20-20 20:20:20'
			comments.unshift(newComment)

			//重定向到首页。1.设置状态码302临时重定向 2.在响应头中通过location
			res.statusCode = 302
			res.setHeader('Location','/')
			res.end()
		} else {
			fs.readFile('./views/404.html',function(err,data){
				res.end(data)
			})
		}
	})
	.listen(6324,function(){
		console.log('server is running...')
	})


	//1.	/index.html
	//2.	开放public目录中的静态资源
	//			当请求/public/xxx的时候，读取响应public目录中的具体资源
	//3.	/post	读取post.html
	//4.	/pinglun
	//		4.1接收表单提交数据
	//		4.2存储表单提交的数据
	//		4.3让表单重定向到 /
	//			statusCode
	//			setHeader