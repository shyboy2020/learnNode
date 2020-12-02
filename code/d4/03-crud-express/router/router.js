/**
*分离出来router.js，增加代码的可维护性，提高开发效率
根据不同的请求方式和请求路径设置具体的处理函数
*/


var fs = require('fs')
var Student = require('../data/students.js')


//0.加载express模块
var express = require('express')
//1.创建一个路由容器
var router = express.Router()
//2.把路由挂载到router容器中
	router.get('/students',function(req,res){
	//readFile第二个参数可选，表示用utf-8编码方式去读取
	//还可以用data.toString()方式
		// fs.readFile('./data/db.json','utf-8',function(err,data){
		// 	if (err) {
		// 		return res.status(500).send('Server err')
		// 	}
		// 	//文件中读取的数据是字符串
		// 	//所以需要转换成对象形式
		// 	var students = JSON.parse(data).students
	
		// 	res.render('index.html',{
		// 	infos: ['学生','老师','家长'],
		// 	students: students,
		// 	})
		// })
	
		Student.find(function(err,studentsList){
			if (err) { 
				return res.status(500).send('Server err')
			}
			res.render('index.html',{
				infos: ['学生','老师','家长'],
				studentsInfo: studentsList
			})
			// console.log(err)
			// console.log(students)
		})
	}),


	//渲染添加学生信息页面
	router.get('/students/new',function(req,res){
		res.render('new.html')
	}),


	//处理保存新学生信息
	router.post('/students/new',function(req,res){
		//1.获取表单数据
		//2.将数据保存到db.json中
		//	先读取.json文件转成对象;向对象中push数据;把对象转成字符串，写入.json文件中
		//3.发送响应
		// console.log(req.body)
		Student.save(req.body,function(err){
			if (err) { 
				return res.status(500).send('Server err')
			}
			res.redirect('/students')
		})
	}),


	//渲染编辑学生页面
	router.get('/students/edit',function(req,res){
		//1.再客户端的列表页中处理链接问题(需要有id参数)
		//2.获取要编辑的学生id
		//3.渲染编辑页面
		//	根据id把学生信息查出来
		//	使用模板引擎渲染页面
		Student.findById(parseInt(req.query.id),function(err,student){
			if (err) { 
				return res.status(500).send('Server err')
			}
			res.render('edit.html',{
				studentsInfo: student
			})
		})
	}),


	//处理编辑学生信息
	router.post('/students/edit',function(req,res){
		// console.log(req.body)
		//1.通过响应id查找
		//2.更新
		//	Student.updateById()
		//3.发送响应
		Student.updateById(req.body,function(err,student){
			if (err) {
				return res.status(500).send('Server err')
			}
			res.redirect('/students')
		})
	}),


	//处理删除学生信息
	router.get('/students/delete',function(req,res){
		//1.获取要删除的id
		//2.根据id执行删除操作
		//3.发送响应
		Student.deleteById(req.query.id,function(err,student){
			if (err) {
				return res.status(500).send('Server err')
			}
			res.redirect('/students')
		})
	})
//导出router容器，在app.js中导入router容器
module.exports = router


//这种方式不推荐
// module.exports = function(app) {
// 	app.get('/students',function(req,res){
// 	//readFile第二个参数可选，表示用utf-8编码方式去读取
// 	//还可以用data.toString()方式
// 		fs.readFile('./db.json','utf-8',function(err,data){
// 			if (err) {
// 				return res.status(500).send('Server err')
// 			}
// 			//文件中读取的数据是字符串
// 			//所以需要转换成对象形式
// 			var student = JSON.parse(data).students
	
// 			res.render('index.html',{
// 			infos: ['学生','老师','家长'],
// 			students: student,
// 			})
// 		})
	
// 	}),
// 	app.get('/students/new',function(req,res){

// 	}),
// 	app.post('/students/new',function(req,res){

// 	}),
// 	app.get('/students/edit',function(req,res){

// 	}),
// 	app.post('/students/edit',function(req,res){

// 	}),
// 	app.get('/students/delete',function(req,res){

// 	})
// }