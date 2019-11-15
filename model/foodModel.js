const  mongoose=require('mongoose');
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    foodName:{type:String,required:true},
    price:{type:String,required:true},
    desc:{type:String,required:true},
    count:{type:String,required:true},
    foodId:{type:String,required:true}
});

var Food = mongoose.model('foods', foodSchema);
module.exports=Food;