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

实例

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

