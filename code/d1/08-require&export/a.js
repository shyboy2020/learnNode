//require方法有两个作用
//	1.加载文件模块并执行里面的代码
//	2.拿到被加载文件模块导出的接口对象

var ret = require('./b.js')

console.log(ret.foo)
console.log(ret.add(1,2))