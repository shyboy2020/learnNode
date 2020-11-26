var foo = 'bar'

function add(x,y){
	return x + y
}

//只能得到我想要给你的成员
//这样做的目的是为了解决变量命名冲突的问题
// exports.add = add

//exports是一个对象
//所以可以通过多次为exports添加成员实现导出多个内部成员

// exports.str = 'hello'


//如果一个模块需要直接导出某个成员，而非挂载的方式
//则必须使用下面这个方式
module.exports = 'hello'
//下面的函数会覆盖上面的字符串
module.exports = function(x,y){
    return x + y
}

module.exports = {
	add: function(){
		return x + y
	},
	str:'hello'
}