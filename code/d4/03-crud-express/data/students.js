/**
*作为数据操作文件模块,用于处理数据.不关心业务
*/

var fs = require('fs')

var dbPath = './data/db.json'

//渲染首页
exports.find = function (callback) {
	fs.readFile(dbPath,'utf-8',function(err,data){
		if (err) { 
			return callback(err)
		}
		callback(null,JSON.parse(data).studentsList)
	})
}

//用于编辑学生信息，查找符合条件id的学生信息
exports.findById = function(id,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if (err) { 
			return callback(err)
		}
		var stuStr = JSON.parse(data).studentsList
		var ret = stuStr.find(function(item){
			//要把id转换成数字类型
			return item.id === parseInt(id)
		})
		callback(null,ret)
	})
}

//添加保存学生信息
exports.save = function(newStudent,callback) {
	fs.readFile(dbPath,'utf-8',function(err,data){
		if (err) { 
			return callback(err)
		}
		//将.json中的对象转化成字符串
		var stuStr = JSON.parse(data).studentsList

		//解决id唯一问题
		newStudent.id = stuStr[stuStr.length - 1].id + 1

		//将新学生数据保存到数组中
		stuStr.push(newStudent)

		//将新生成的字符串再转化成对象
		var stuObj = JSON.stringify({
			studentsList: stuStr
		})

		fs.writeFile(dbPath,stuObj,function(err){
			if (err) {
				//传递错误对象
				return callback(err)
			}
			callback(null)
		})
	})
}

//更新编辑学生信息
exports.updateById = function(student,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if (err) {
			return callback(err)
		}
		//将.json中的对象转化成字符串
		var stuStr = JSON.parse(data).studentsList

		student.id = parseInt(student.id)
		//查找需要修改的数据，使用ES6的数组方法:find
		var stuFind = stuStr.find(function(item){
			return item.id === student.id
		})
		//遍历拷贝对象
		for(var key in student){
			stuFind[key] = student[key]
		}

		//将新生成的字符串再转化成对象
		var stuObj = JSON.stringify({
			studentsList: stuStr
		})

		fs.writeFile(dbPath,stuObj,function(err){
			if (err) {
				//传递错误对象
				return callback(err)
			}
			callback(null)
		})
	})
}

//处理删除学生信息
exports.deleteById = function(id,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if (err) {
			return callback(err)
		}
		//将.json中的对象转化成字符串
		var stuStr = JSON.parse(data).studentsList
		//findIndex方法用来根据条件查找元素的下标
		var deleteId = stuStr.findIndex(function(item){
			return item.id === parseInt(id)
		})

		//根据下标从数组中删除对应学生对象
		stuStr.splice(deleteId,1)

		//将新生成的字符串再转化成对象
		var stuObj = JSON.stringify({
			studentsList: stuStr
		})

		fs.writeFile(dbPath,stuObj,function(err){
			if (err) {
				//传递错误对象
				return callback(err)
			}
			callback(null)
		})
	})
}