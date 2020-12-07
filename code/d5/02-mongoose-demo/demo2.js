//引入
const mongoose = require('mongoose')
//定义一个schema
const Schema = mongoose.Schema

//1.连接数据库
//指定连接的数据库不需要存在,当你插入数据的时候就会自动创建出来
mongoose.connect('mongodb://localhost/itcast',{useNewUrlParser: true, useUnifiedTopology: true})

//2.设计集合结构(表结构)
//字段名称就是表结构中的属性名称
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

//3.将文档结构发布为模型
//mongoose.model方法:将一个结构发布为model
//第一个参数:传入一个大写名词单数字符串来表示你的数据库名称
//          *大写名词单数字符串会自动转化为小写名词复数字符串
//第二个参数:结构schema名称
//返回值:模型构造函数
var User = mongoose.model('User',userSchema)


//************新增数据*********************
// 4.处理模型构造函数
// const admin = new User({
//     username:'wh2',
//     password:'19981101',
//     email:'759399478@qq.com'
// })
//
// //5.保存数据数据持久化
// admin.save().then(() => {
//         console.log('保存成功')
// })

//************查询数据********************
//查询所有
// User.find().then((data) => {
//     console.log(data)
// })
// 查询单个
// User.findOne({password:'123456'}).then((data) => {
//     console.log(data)
// })


//*************删除数据***********************
// 删除单个
// User.deleteOne({username:'wh'}).then(() => {
//     console.log('删除成功')
// })
//删除多个
// User.deleteMany({username:'wh2'}).then(() => {
//     console.log('删除成功')
// })


//*************更新数据*********************
// User.findByIdAndUpdate('5fcb2a4ca6ec9813341c7650',{password:'itspassword'}).then((data)=>{
//     console.log(data)
//     console.log('更新成功')
// }).catch(()=>{
//     console.log('更新失败')
// })