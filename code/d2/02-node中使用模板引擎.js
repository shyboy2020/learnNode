//art-template
var template = require('art-template')
var fs = require('fs')


fs.readFile('./templateStr.html',function(err,data){
	if (err) {
		return console.log('读取文件失败')
	}
	//读取到的data是二进制，需要转换
	var ret = template.render(data.toString(),{
	name:'WH',
	age:16,
	province:'上虞',
	hobbies:[
		'1',
		'2',
		]
	})
	console.log(ret)

})


