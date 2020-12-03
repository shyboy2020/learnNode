# 回调函数



## !!!需要得到异步操作中的结果的时候，需要使用回调函数



不使用回调函数

```javascript
function add(x,y){
    console.log(1)
    setTimeout(() => {
        console.log(2)
        let ret = x + y
    },1000)
    console.log(3)
}

console.log(add(10,20))
// 1
// 3
// undefined
// 2
```

使用回调函数

```javascript
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
```

## 基于原生XMLHTTPRequest封装get方法

```javascript
function get(url,callback) {
        //1.创建对象
        var xhr = new XMLHttpRequest()
        //2.当请求加载成功之后要调用指定的函数
        xhr.onload = function(){
            callback(xhr.responseText)
        }
        xhr.open('GET',url)
        xhr.send()
    }

    get('data.json',function(data){
        console.log(data)
    })
```

