var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = Schema({
	id: Number,
	name: String,
	brand: String,
	display: String,
	price: Number
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
