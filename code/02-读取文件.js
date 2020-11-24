//1.使用require方法加载fs核心模块
var fs = require('fs')

//2.读取文件  第一个参数时读取文件的路径
// 第二个参数是一个回调函数  error和data
//  成功：  data=数据    error=null
// 失败：  data=null   error=错误对象
fs.readFile('../data/ahello.txt',function(error,data){
	if(error){
		console.log('读取文件失败')
	} else {
		console.log(data.toString())
	}
	//得到十六进制数据<Buffer 68 65 6c 6c 6f 
	//20 6e 6f 64 65 6a 73 20 ef bc 9a ef bc 89>
})