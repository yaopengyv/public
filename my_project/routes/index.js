var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");
var goodsModel = require("../model/goodsModel");
var multiparty = require('multiparty');


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
router.get('/goodslist', function(req, res) {

  goodsModel.find({},function(err, docs) {
		res.render("goodslist", {list: docs});
	})
});
router.get('/index', function(req, res){
	// 检查用户是否登录
	if(req.session && req.session.username != null) {
		res.render("/index", {});
	} else {
		// 重定向
		res.redirect('/login');
	}
})

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
			result.message = "登录失败，请重新输入正确的用户名和密码"
			res.send(result);
		}
	})
});
router.post('/query',function(req,res){
			var select_name=req.body.select_fl;
			console.log(select_name);
			goodsModel.find({goods_Name: new RegExp(select_name)});
})
router.post('/api/add_Goods',function(req,res){
		var Form = new multiparty.Form({
			uploadDir: "./public/images"
		})
	Form.parse(req, function(err, body, files){
		var goods_Name =body.goods_Name[0];
		var art_num =body.art_num[0];
		var shop_price=body.shop_price[0];
		var sales_count=body.sales_count[0];
		var imgName = files.img[0].path;
		imgName = imgName.substr(imgName.lastIndexOf("\\") + 1);

		var gm=new goodsModel();
		gm.goods_Name=goods_Name;
		gm.art_num=art_num;
		gm.shop_price=shop_price;
		gm.sales_count=sales_count;
		gm.img=imgName;
		// console.log(goods_name,art_num,files)
		gm.save(function(err){
			if(!err){
				res.send("商品上传成功");
			}else{
				res.send("商品上传失败");
			}
		})
	})
})
module.exports = router;
