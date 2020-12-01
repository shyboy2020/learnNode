//1.引包
var express = require('express')
var bodyParser = require('body-parser')

//2.创建服务器应用程序
var app = express()

//配置使用art-template引擎
//第一个参数，表示当渲染以 .html结尾的文件的时候，使用模板引擎
//express-art-template 是专门用早express中的，依赖与art-template
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});


//公开指定目录
app.use('/public/',express.static('./public'))

//配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//评论信息
var comments = [
	{
		name:'wh',
		message:'傻逼',
		dateTime:'2020-20-20'
	},
	{
		name:'wh1',
		message:'楼上+1',
		dateTime:'2020-20-20'
	},
	{
		name:'wh2',
		message:'楼上+2',
		dateTime:'2020-20-20'
	}
]

//express为res对象提供了一个方法render
//render方法默认不使用，如果配置了模板引擎就能使用了
//res.render('html模板名',{模板数据})
//第一个参数不能写路径，默认会去views目录中查找
//约定将所有视图文件放在views中



//当服务器收到get请求 / 时，执行回调处理函数
app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments
	})
})

//当服务器收到get请求 /about 时，执行回调处理函数
app.get('/post',function(req,res){
	//在Express中可以直接req.query来获取查询字符串参数
	res.render('post.html')
})

//用POST请求/post数据
app.post('/post',function(req,res){
	//1.获取表单post请求体数据
	//2.处理
	//3.发送响应
	//body来获取表单数据
	var NewComment = req.body
	NewComment.dataTime = new Date()
	comments.unshift(NewComment)
	res.redirect('/')
})

// app.get('/pinglun',function(req,res){
// 	// req.query只能拿get请求参数
// 	var NewComment = req.query
// 	NewComment.dataTime = new Date()
// 	comments.unshift(NewComment)
// 	res.redirect('/')
// })


app.listen(6324,function(){
	console.log('app is running ....')
})