// function add(x,y){
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         let ret = x + y
//     },1000)
//     console.log(3)
// }
//
// console.log(add(10,20))
// // 1
// // 3
// // undefined
// // 2


//凡是需要得到一个函数内部异步操作的结果，必须通过回调函数
function add(x,y,callback) {
    console.log(1)
    setTimeout(function(){
        console.log(2)
        var ret = x + y
        callback(ret)
    },1000)
    console.log(3)
}

add(10,20,function(ret){
    console.log(ret)
})
// 1
// 3
// 2
// 30
