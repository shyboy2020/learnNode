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