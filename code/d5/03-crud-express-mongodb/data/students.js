//引入
var mongoose = require('mongoose')
//定义一个schema
var Schema = mongoose.Schema

//连接数据库
mongoose.connect('mongodb://localhost/itcast',{useNewUrlParser: true, useUnifiedTopology: true})

//设计表结构
var studentSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})


//导出model
module.exports = mongoose.model('Student',studentSchema)

