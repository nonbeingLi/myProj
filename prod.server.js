var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var  router = express.Router();

router.get('/',function(req, res ,next){
    req.url = '/index.html';
    next();
});

app.use(router);

var appData = require('./mock/data.json')  //加载本地数据文件
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()    // 编写路由

apiRoutes.get('/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goods
    });
});

apiRoutes.get('/seller', function (req, res) {
    res.json({
        errno: 0,
        data: seller
    });
});

apiRoutes.get('/ratings', function (req, res) {
    res.json({
        errno: 0,
        data: ratings
    });
});
app.use('/api', apiRoutes) // 所有通过接口相关的api都会通过api这个路由导向到具体的路由

app.use(express.static('./dist'));   //目录只限当前目录

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});


