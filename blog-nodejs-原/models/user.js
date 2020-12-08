const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost/bloginfo',{useNewUrlParser: true, useUnifiedTopology: true})
//定义schema
const Schema = mongoose.Schema

//设计集合结构
const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created_time:{
        type: Date,
        //这里Date.now()的话会直接调用当前时间戳
        //所以new Model的时候，若没有传created_time，则调用default的
        default: Date.now
    },
    last_modified_time:{
        type: Date,
        default: Date.now
    },
    avatar:{
        type: String,
        default: '/public/img/avatar-default.png'
    },
    bio:{
        type: String,
        default: ''
    },
    gender:{
        type: Number,
        enum: [0,1,2],
        default: 2
    },
    birth:{
        type: Date
    },
    status:{
        type: Number,
        // 0 没有权限限制
        // 1 不可以评论
        // 2 不可以登录
        enum: [0,1,2],
        default: 0
    }
})

//导出模型
module.exports = mongoose.model('User',userSchema)