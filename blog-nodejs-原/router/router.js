const express = require('express')
const md5 = require('blueimp-md5')

const User = require('../models/user')

const router = express.Router()

router.get('/',(req,res) => {
    // console.log(req.session.user)
    res.render('index.html',{
        user: req.session.user
    })
})

router.get('/login',(req,res) => {
    res.render('login.html')
})

router.post('/login',(req,res) => {
    let body = req.body;
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    },function(err,data){
        if (err){
            return res.status(500).json({
                err_code: 500
            })
        }

        if (!data){
            return res.status(200).json({
                err_code: 1
            })
        }

        //用户存在密码正确，则登录成功，通过Session存储登录状态
        req.session.user = data

        return res.status(200).json({
            err_code: 0
        })

    })
})

router.get('/register',(req,res) => {
    res.render('register.html')
})

router.post('/register',(req,res) => {
    let body = req.body;
    User.findOne({
        $or:[
            {
                email:body.email
            },
            {
                nickname:body.nickname
            }
        ]
    },(err,data) => {
        if(err) {
            //Express提供一个响应方法:json
            //该方法接受一个对象作为参数，自动转化为字符串再发送给浏览器
            return res.status(500).json({
                err_code:500
            })
        }
        if(data) {
            return res.status(200).json({
                err_code:1,
            })
        }
        //密码加密
        body.password = md5(md5(body.password));

        new User(body).save((err,data) => {
            if(err) {
                return res.status(500).json({
                    err_code:500,
                })
            }
            //注册成功，使用Session记录用户的登录状态
            req.session.user = data;
            return res.status(200).json({
                err_code:0,
            })
        })
    })
})

router.get('/logout',(req,res) => {
    //清除登录状态
    //重定向到登录页
    req.session.user = null
    res.redirect('/login')
})

router.get('/settings/profile',(req,res) => {
    console.log(req)
    console.log(res)
})

module.exports = router