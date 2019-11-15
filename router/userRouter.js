const express=require('express');
const router=express.Router();
const Mail=require('../utils/mail');
const User=require('../model/userModel')
router.post('/reg',(req,res)=>{
    //获取数据
    let {us,ps}=req.body;
    if(us && ps){
        User.find({us})
        .then((data)=>{
            console.log(data);
            if(data.length===0){
                return User.insertMany({us,ps})
            }else{
                res.send({err:-3,msg:'用户名已存在'})
            }
        })
        .then(()=>{
            res.send({err:0,msg:'注册ok'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'注册err'})
        })
    }else{
        return res.send({err:-1,msg:'参数错误'});
    }
    //数据处理
    //返回数据
    // res.send('test ok');
})

router.post('/login',(req,res)=>{
    let {us,ps}=req.body;
    console.log(us,ps);
    if(!us || !ps){
        return res.send({err:-1,msg:'参数错误'})
    }
    User.find({us,ps})
    .then((data)=>{
        if(data.length>0){
            res.send({err:0,msg:'登录ok'})
        }else{
            res.send({err:-2,msg:'用户名密码不正确'})
        }
        console.log(data);
    
    })
    .catch((err)=>{
        return res.send({err:-1,msg:'内部错误'})
    })
    
})

router.post('/getMialCode',(req,res)=>{
    console.log(req.body);
    let {mail}=req.body;
    let code=parseInt(Math.random()*10000);
    Mail.send(mail,code)
    .then(()=>{
        res.send({err:0,msg:'验证码发送ok'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'验证码发送失败'})
    })
})

router.get('/loginin',(req,res)=>{
    console.log('你好');
    //接收参数
    console.log(req.query);
    // let {us,ps}=req.query;
    res.send('注册成功');
})


module.exports=router;