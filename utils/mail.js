'use strict';
const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com', //发送方邮箱
        port: 465, //端口号
        secure: true, // true for 465, false for other ports
        auth: {
            user:'1244218841@qq.com', // generated ethereal user
            pass: 'imwfxmpbggpqbagd' // generated ethereal password
        }
    });
    

    function  send(mail,code){
        //邮件信息
        let mailobj={
            from: '"Fred Foo 👻" <1244218841@qq.com>', // sender address
            to: mail, // list of receivers
            subject: '测试', // Subject line
            text: `你的验证码为${code},有效期为五分钟` // plain text body
        }
        return new Promise((resolve,reject)=>{
            transporter.sendMail(mailobj,(err,data)=>{
                console.log(err);
                console.log(data);
                if(err){
                    reject()
                }else{
                    resolve()
                }
                
            });
        })
        
    }

    module.exports={send}; 