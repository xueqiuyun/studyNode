const express=require('express');
const db=require('./db/connect');
const path=require('path');
const app=express();
//路由
const userRouter=require('./router/userRouter');
const foodRouter=require('./router/foodRouter');
const fileRouter=require('./router/fileRouter');

//express 实例化
const  bodypaser=require('body-parser');
//解析表单数据
app.use(bodypaser.urlencoded({extended:false}))
app.use(bodypaser.json());

app.use('/public',express.static(path.join(__dirname,'./static')));
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    req.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

app.use('/user',userRouter);
app.use('/food',foodRouter);
app.use('/file',fileRouter);
// //解决跨域


app.listen('3000',()=>{
    console.log('service start');
})
