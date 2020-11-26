//在Node中，每个模块都有一个module对象
//在module对象中，有个exports成员

// var module = {
// 	exports:{
// 		foo:'bar',
// 		add:function(){}
// 	}
// }


// module.exports.foo = 'bar'
// module.exports.add = function(x,y){
// 	return x + y
// }


//在Node中，exports和module.exports是等价的
exports.foo = 'bar'
module.exports.add = function(x,y){
	return x + y
}