# MongoDB

## 关系型数据库和非关系型数据库

- 关系型数据库
  - 表与表之间存在关系
  - 所有的关系型数据库都需要通过`sql`语言操作，操作前需要设计表结构
  - 数据表支持约束：唯一的、主键、默认值、非空
- 非关系型数据库
  - 灵活，有些非关系型数据库是key-value键值对
  - MongoDB是最像关系型数据库的非关系型数据库
    - 数据库 -》 数据库
    - 数据表 -》集合(数组)
    - 表记录 -》 (文档对象)
  - 不需要设计表结构，可以任意往里面存数据

## 启动和关闭数据库

启动

```javascript
//在mongodb所在盘符根目录下创建/data/db作为数据存储目录
mongod
```

停止

```javascript
Ctrl + c
```

连接数据库

```javascript
mongo
```

断开数据库

```javascript
exit
```

## 基本命令

- `show dbs`
  - 查看显示所有数据库
- `db`
  - 查看当前操作的数据库
- `use 数据库名称`
  - 切换到指定的数据库
- `show collections`
  - 查看当前数据库中的集合
- `db.集合名.find()`
  - 查看集合中的具体数据

## 在Node中如何操作MongoDB数据

### 1.使用官方的`mongodb`包操作

> https://github.com/mongodb/node-mongodb-native

### 2.使用第三方mongoose包操作

安装

```javascript
npm i mongoose
```

官方实例

```javascript
const mongoose = require('mongoose');
//连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


//创建一个模型
const Cat = mongoose.model('Cat', { name: String });

//实例化一个cat模型
const kitty = new Cat({ name: 'Zildjian' });
//持久化保存kitty实例
kitty.save().then(() => console.log('meow'));
```

#### MongoDB数据库的基本概念

- 可以有多个数据库
- 一个数据库中可以有多个集合
- 一个集合中可以有多个文档
- 文档结构很灵活

```javascript
{
    goods:{
        users:[
            {name:'张三',age:14}
            {name:'张三1',age:13}
    		{name:'张三2',age:16}
    		...
        ]，
        stores:[
            
        ],
        ...
    },
    files:{
        
    },
    ...
}
```

#### moogoose具体使用

##### 设计schema发布model

```javascript
//引入
const mongoose = require('mongoose')
//定义一个schema
const Schema = mongoose.Schema

//1.连接数据库
//指定连接的数据库不需要存在,当你插入数据的时候就会自动创建出来
mongoose.connect('mongodb://localhost/itcast')

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
//最后 module.exports = mongoose.model('User',userSchema)
```

##### 添加数据并保存

```javascript
//4.处理模型构造函数
const admin = new User({
    username:'admin',
    password:'123456',
    email:'13819571931@sina.cn'
})

//5.保存数据数据持久化
admin.save().then(() => {
    console.log('保存成功')
})
```

##### 查询数据

查询所有

```javascript
User.find().then((data) => {
    console.log(data)
})
```

按条件查询所有

```javascript
User.find({password:'123456'}).then((data) => {
    console.log(data)
})
```

按条件查询单个

```javascript
User.findOne({password:'123456'}).then((data) => {
    console.log(data)
})
```

##### 删除数据

删除单个

```javascript
User.deleteOne({username:'wh'}).then(() => {
    console.log('删除成功')
})
```

删除多个

```javascript
User.deleteMany({username:'wh2'}).then(() => {
    console.log('删除成功')
})
```

根据id删除

```javascript
User.findByIdAndRemove/Delete(id).then(() => {
    console.log('删除成功')
}).catch(() => {
    console.log('删除失败')
})
```



##### 更新数据

按id更新一个数据

```javascript
User.findByIdAndUpdate('5fcb2a4ca6ec9813341c7650',{password:'itspassword'}).then((data)=>{
    console.log(data)
    console.log('更新成功')
}).catch(()=>{
    console.log('更新失败')
})
```



##### **具体方法参考官方文档

> http://www.mongoosejs.net/docs/api.html#Model

