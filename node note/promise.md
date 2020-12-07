# promise

## 回调地狱

```javascript
const fs = require('fs')
fs.readFile('./data/a.txt','utf-8',function (err,data) {
    if (err){
        //抛出异常
        //  1.阻止程序的执行
        //  2.把错误消息打印到控制台
        throw err
    }
    console.log(data)
    fs.readFile('./data/b.txt','utf-8',function (err,data) {
        if (err){
            //抛出异常
            //  1.阻止程序的执行
            //  2.把错误消息打印到控制台
            throw err
        }
        console.log(data)
        fs.readFile('./data/c.txt','utf-8',function (err,data) {
            if (err){
                //抛出异常
                //  1.阻止程序的执行
                //  2.把错误消息打印到控制台
                throw err
            }
            console.log(data)
        })
    })
})
```

为了解决以上编码方式带来的问题，所以在ES6中新增API：`promise`

## promise使用

基本使用

```javascript
const fs = require('fs')
//1.创建Promise容器
const p1 = new Promise(function(resolve,reject){
    fs.readFile('./data/a.txt','utf-8',function (err,data) {
        if (err) {
            //把容器的pending状态变为rejected
            //调用reject相当于调用了catch
            reject(err)
        } else {
            //把容器的pending状态变为resolve
            //调用resolve相当于调用了then
            resolve(data)
        }
    })
})

p1.then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log('读取文件失败了',err)
})
```

当使用到嵌套时

```javascript
const fs = require('fs')
const p1 = new Promise(function(resolve,reject){
    fs.readFile('./data/a.txt','utf-8',function (err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const p2 = new Promise(function(resolve,reject){
    fs.readFile('./data/b.txt','utf-8',function (err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const p3 = new Promise(function(resolve,reject){
    fs.readFile('./data/c.txt','utf-8',function (err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

p1.then(function (data) {
    console.log(data)
    //当P1读取成功后
    //当前函数中return 一个Promise对象,可以在下一个then接收到
    return p2
}).catch(function(err){
    console.log('读取文件失败了',err)
}).then()....

//有多个异步请求,就多个return和then
```

封装Promise版本的`readFile`

```javascript
const fs = require('fs')

function pReadFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',function (err,data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


pReadFile('./data/a.txt')
    .then(function (data) {
        console.log(data)
        return pReadFile('./data/b.txt')
    })
    .then(function(data) {
        console.log(data)
        return pReadFile('./data/c.txt')
    })
    .then(function(data){
        console.log(data)
    })
```

