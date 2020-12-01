var express = require('express')

var app = express()

//开放目录
//当以/public/开头的时候，去 ./public/ 目录中找对应的文件
// app.use('/public',express.static('./public/'))


//当省略第一个参数的时候，则可以通过省略/public来访问public中的文件
app.use(express.static('./public/'))

app.get('/',function(req,res){
	res.send('你好啥b')
})

app.listen(6324,function(){
	console.log('app is running...')
})