//1.引包
var express = require('express')

//2.创建服务器应用程序
var app = express()

//模板引擎安装
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});


//公开指定目录
app.use('/public/',express.static('./public'))

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

app.get('/pinglun',function(req,res){
	var NewComment = req.query
	NewComment.dataTime = new Date()
	comments.unshift(NewComment)
	res.redirect('/')
})


app.listen(6324,function(){
	console.log('app is running ....')
})