var fs = require('fs')

fs.readdir('E:/www',function(err,files){
	if (err) {
		return res.end('文件不存在')
	}
	console.log(files)
})