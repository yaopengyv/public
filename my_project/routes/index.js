var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});
router.get('/index', function(req, res, next) {
  res.render('bam', { title: '后台管理页面' });
});
router.get('/addgoods', function(req, res, next) {
  res.render('addgoods', { title: '添加商品' });
});
router.get('/goodslist', function(req, res, next) {
  res.render('goodslist', { title: '商品列表' });
});

module.exports = router;
