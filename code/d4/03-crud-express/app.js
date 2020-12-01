var express = require('express')
var fs = require('fs')

var app = express()

//开放node_modules和public目录
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html', require('express-art-template'));


var infos = ['学生','老师','家长']


app.get('/',function(req,res){
	//readFile第二个参数可选，表示用utf-8编码方式去读取
	//还可以用data.toString()方式
	fs.readFile('./db.json','utf-8',function(err,data){
		if (err) {
			return res.status(500).send('Server err')
		}
		//文件中读取的数据是字符串
		//所以需要转换成对象形式
		var student = JSON.parse(data).students

		res.render('index.html',{
		infos: infos,
		students: student,
		})
	})
	
})

app.listen(6324,function(){
	console.log('app is running...')
})