require('./a')
//优先从缓存加载
//由于在 a 中已经加载过了
//所以这里不会重复加载

let fn = require('./b')

console.log(fn)