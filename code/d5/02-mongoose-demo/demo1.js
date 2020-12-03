const mongoose = require('mongoose');
//连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


//创建一个模型
const Cat = mongoose.model('Cat', { name: String });


for(let i = 0; i < 100;i++){
    //实例化一个cat模型
    const kitty = new Cat({ name: 'Zildjian' + i });
    //持久化保存kitty实例
    kitty.save().then(() => console.log('meow'));
}
