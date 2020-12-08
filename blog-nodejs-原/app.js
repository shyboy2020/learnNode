const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const path = require('path')

const router = require('./router/router')

const app = express()

//开放静态资源
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.use('/public/',express.static(path.join(__dirname,'./public/')))

//配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
//配置中间件，在挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//在 Express 这个框架中，默认不支持Session 和 Cookie
//需要用到第三方中间件: express-session
//配置express-session
app.use(session({
    //配置加密字符串，在原有的加密基础上和这个字符串拼接加密
    //为了增加安全性
    secret: 'gundam',
    resave: false,
    saveUninitialized: true
}))

//挂载路由
app.use(router)

app.listen(6324,() => {
    console.log('app is running...')
})