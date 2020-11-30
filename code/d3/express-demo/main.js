//1.引包
let express = require('express')

//2.创建服务器应用程序
let app = express()

//公开指定目录
app.use('/public/',express.static('./public'))

//当服务器收到get请求 / 时，执行回调处理函数
app.get('/',function(req,res){
	res.send('hello express')
})

//当服务器收到get请求 /about 时，执行回调处理函数
app.get('/about',function(req,res){
	//在Express中可以直接req.query来获取查询字符串参数
	console.log(req.query)
	res.send('你好 express')
})

app.get('/pinglun',function(req,res){
	
})


app.listen(6324,function(){
	console.log('app is running ....')
})