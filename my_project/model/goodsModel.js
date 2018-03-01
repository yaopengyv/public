var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Goods = new Schema({
    goods_Name  : String,
    art_num     : String,
    shop_price  :String,
    sales_count :String,
    img         :String,
    create_date : { type: Date, default: Date.now }
});

var GoodsModel = mongoose.model('goods', Goods);
module.exports = GoodsModel;