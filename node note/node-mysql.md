# 使用node操作mysql数据库

安装:

```javascript
npm install mysql
```

使用案例:

```javascript
var mysql      = require('mysql');

//1.建立连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wh123',
    database : 'itcast'
});

//2.连接数据库
connection.connect();

//3.执行数据操作
// 查询数据
connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
//添加数据
// connection.query('INSERT INTO users VALUES(1 ,"admin","123456")', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

//4.关闭连接
connection.end();

```

