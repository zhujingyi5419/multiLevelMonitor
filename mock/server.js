
var app = require('koa')();
var router = require('koa-router')();
//资源可视化--目录树数据
const treeData = require('./ResourceVisual/treeData.js');
//console.log(treeData);
router.get('/ResourceVisual/treeData', function *(next) {
    console.log('多层级目录树');
    this.body = treeData
});
//资源可视化--仪表盘数据
const dashboard = require('./ResourceVisual/dashboard.js');
//console.log(dashboard);
router.get('/ResourceVisual/dashboard', function *(next) {
    console.log('仪表盘');
    this.body = dashboard
});

//资源可视化--下级中心数据
const juniorcenter = require('./ResourceVisual/juniorcenter.js');
//console.log(juniorcenter);
router.get('/ResourceVisual/juniorCenter', function *(next) {
    console.log('仪表盘');
    this.body = juniorcenter
});

var cors = require('koa-cors');
app.use(cors());
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8888);


