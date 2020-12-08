const http = require('http')
const url = require('url')

const cookie = require('./middlewares/cookie')
const query = require('./middlewares/query')
const postbody = require('./middlewares/post-body')
const session = require('./middlewares/session')

const server = http.createServer(function(req,res) {
    //解析表单get请求体
    //解析表单post请求体
    //解析cookie
    //处理session
    //使用模板引擎
    // console.log(req.query)
    // console.log(req.body)
    // console.log(req.cookie)
    // console.log(req.session)

    //解析请求地址中的get参数
    // const urlObj = url.parse(req.url,true)
    // req.query = urlObj.query

    query(req,res)

    //解析请求地址中的post参数
    // req.body = {
    //     foo:'bar'
    // }

    postbody(req,res)

    //解析cookie
    // req.cookie = {
    //     isLogin: true
    // }
    cookie(req,res)

    //配置session
    // req.session = {}

    session(req,res)

    //配置模板引擎
    res.render = function(){

    }
})


server.listen(6324,function(){
    console.log('running...')
})