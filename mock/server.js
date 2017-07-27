
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
const dashboardT = require('./ResourceVisual/dashboardTest.js');
//console.log(dashboard);
router.get('/ResourceVisual/dashboard/:center', function *(next) {
    // 参数
    const params = this.params;
    const paramsCenter = params.center;
    console.log('当前中心：' + paramsCenter);
    if(paramsCenter == "bomb"){
        this.body = dashboardT
    }else{
        this.body = dashboard
    }
});

//资源可视化--下级中心数据
const juniorcenter = require('./ResourceVisual/juniorcenter.js');
//console.log(juniorcenter);
router.get('/ResourceVisual/juniorCenter/:currentCenter', function *(next) {
    const params = this.params;
    const paramsCenter = params.currentCenter;
    console.log('当前中心：' + paramsCenter);
    this.body = juniorcenter
});

var cors = require('koa-cors');
app.use(cors());
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8888);


