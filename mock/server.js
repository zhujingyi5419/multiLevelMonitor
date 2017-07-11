
var app = require('koa')();
var router = require('koa-router')();
//多层级目录树数据
const treeData = require('./ResourceVisual/treeData.js');
console.log(treeData);
router.get('/ResourceVisual/treeData', function *(next) {
    console.log('多层级目录树');
    this.body = treeData
});
var cors = require('koa-cors');
app.use(cors());
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8888);
