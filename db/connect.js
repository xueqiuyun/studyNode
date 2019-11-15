//连接数据库
const  mongoose=require('mongoose');

mongoose.connect('mongodb://test:qwert@127.0.0.1:27017/test',{useUnifiedTopology: true,useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('db ok');
});