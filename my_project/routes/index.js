var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});
router.get('/index', function(req, res, next) {
  res.render('bam', { title: '后台管理页面' });
});

module.exports = router;
