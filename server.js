const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
/*让ejs能够识别后缀为’.html’的文件*/
app.engine('.html', ejs.__express);
/*在调用render函数时能自动为我们加上’.html’后缀*/
app.set('view engine', 'html');
/*设定render页面的根目录，则在该目录下的view目录下*/
app.set('views', './build');
/*静态文件的中间件，把目录‘./build’下的文件路径重定向为‘/’，在前段HTML引入的路径就按照重定向的路径来设置*/
app.use('/', express.static('./build'));
/*添加body-parser来解析Post请求传来的json格式数据*/
app.use(bodyParser.json({limit: '10mb'}));
//此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8888);
console.log('INFO: remonitor已经启动');