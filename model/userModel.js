const  mongoose=require('mongoose');
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;

var userSchema = new Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
    age:Number,
    sex:{type:Number,defalut:0},
    mail:String
});

var User = mongoose.model('user', userSchema);
module.exports=User;