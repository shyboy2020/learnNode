var fs = require('fs')

//第一个参数:文件路径
//第二个参数:文件内容
//第三个参数:回调函数 error
fs.writeFile('../data/write.md','test writein',function(error){
	if (error) {
		console.log('writein failed')
	} else {
		console.log('writein successed')
	}
})	