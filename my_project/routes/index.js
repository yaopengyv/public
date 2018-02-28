var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");

/* GET home page. */
router.get('/login', function(req, res, next) {
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

router.post('/xiangmu/userlogin', function(req, res) {
  var username = req.body.username;
	var psw = req.body.psw;

	var result = {
		status: 1,
		message: "登录成功"
	}
	UserModel.find({username: username, psw: psw}, function(err, docs){
		if(!err && docs.length > 0) {
			console.log("登录成功");
			res.send(result);
		} else {
			console.log("登录失败，请检查您的用户名或者密码");
			result.status = -109;
			result.message = "登录失败，请检查您的用户名或者密码"
			res.send(result);
		}
	})
});

module.exports = router;
