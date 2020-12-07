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
    return p2
}).catch(function(err){
    console.log('读取文件c失败了',err)
}).then(function (data) {
    console.log(data)
    return p3
}).catch(function (err) {
    console.log('读取文件a失败了',err)
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log('读取文件b失败了',err)
})
