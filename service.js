const express=require('express');
const app=express();
//express 实例化
const  bodypaser=require('body-parser');
//qpp.use  使用中间件
//解析表单数据
app.use(bodypaser.urlencoded({extended:false}))
//最简单的api接口
app.get('/user/login',(req,res)=>{
    console.log('你好');
    //接收参数
    // let {us,ps}=req.query;
    res.send('注册成功');
})

app.get('/test',(req,res)=>{
    console.log('你好,test');
    //接收参数
    // let {us,ps}=req.query;
    res.send('注册成功,test');
})

app.post('/user/reg',(req,res)=>{
    // let {us,ps}=req.body;
    console.log(req.body);
    res.send('注册成功');

})

app.listen(3000,()=>{
    console.log('server start');
})