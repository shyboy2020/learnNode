var express = require('express')
var bodyParser = require('body-parser')


var router = require('./router/router.js')


var app = express()

//开放node_modules和public目录
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
//配置模板引擎
app.engine('html', require('express-art-template'));
//配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置操作需要写在搭载路由容器之前
//得到路由容器
app.use(router)


//绑定端口号，启动服务
app.listen(6324,function(){
	console.log('app is running...')
})

