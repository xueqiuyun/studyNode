const express=require('express');
const router=express.Router();
const Mail=require('../utils/mail');
const foodModel=require('../model/foodModel')
router.post('/add',(req,res)=>{
    console.log(req.body);
    let {foodName,price,desc,count,foodId}=req.body;
    foodModel.insertMany({foodName,price,desc,count,foodId})
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})
    })
})

router.post('/getQueryId',(req,res)=>{
    let {foodId}=req.body;
    foodModel.find({foodId})
    .then((data)=>{
        res.send({err:0,msg:'查询ok',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    })
})

router.post('/getPage',(req,res)=>{
    let pageSize=req.body.pageSize || 2;
    let page=req.body.page || 1;
    foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
    .then((data)=>{
        res.send({err:0,msg:'分页ok',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'分页失败'})
    })
})

module.exports=router;