//加载操作系统信息模块
var os = require('os')
//加载操作路径的模块
var path = require('path')


//获取当前机器的cpu
console.log(os.cpus())

//获取路径中扩展名
console.log(path.extname('e:a/a.txt'))