const express=require('express');
const router=express.Router();
const foodModel=require('../model/foodModel')
const multer=require('multer');
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        //文件路径
        cb(null,'./static/img');
    },
    filename:function(req,file,cb){
        let exts=file.originalname.split('.');
        let  ext=exts[exts.length-1];
        let tmpname=(new Date()).getTime()+parseInt(Math.random()*9999);
        cb(null,`${tmpname}.${ext}`);
        //指定文件名
        // cb(null,file.filename+'-'+Date.now()+"."+fileFormat[fileFormat.length-1]);
        // cb(null,'aaa.jpg');
    }
});
var upload=multer({
    storage:storage
});
router.post('/upload',upload.single("hehe"),(req,res)=>{
    console.log(req.file);
    let {size,mimetype,path}=req.file;
    let types=['jpg','jpeg','png','gif'];
    let tmpType=mimetype.split('/')[1];
    if(size>5000000){
        return res.send({err:-1,msg:'尺寸太大'})
    }else if(!types.includes(tmpType)){
        return res.send({err:-2,msg:'类型错误'})
    }else{
        let url=`/public/img/${req.file.filename}`
        res.send({err:0,msg:'上传ok',img:url});
    }
    
})
module.exports=router;