const Products = require('../models/Products')

function saveProduct(req, res) {
	var myProduct = new Products(req.body);
	myProduct.save((err, result) => {
		res.status(200).send({
			message: result
		});
	})
};
function listAllData(req, res) {
	var idProduct = req.params.idb;
	
	if(idProduct === undefined){
		var result = Products.find({}).sort('name');
	}else {
		var result = Products.findById(idProduct);
	}
	result.exec(function(err, result) {
		if(err) {
			res.status(500).send({
				message: 'Failed to execute'
			})
		}else {
			if(!result) {
				res.status(404).send({
					message: 'Product not found'
				});
			}else {
				res.status(200).send({result})
			}
		}
	})
}

function searchData(req, res) {
	var idProduct = req.params.id;
	Products.findById(idProduct).exec((err, result) => {
		if(err) {
			res.status(500).send({
				message: 'Failed to execute'
			})
		} else {
			if(!result) {
				res.status(404).send({
					message: 'Product not found'
				});
			} else {
				res.status(200).send({result})
			}
		}
	})
}

function updateProduct(req, res) {
	var id = req.params.id;
	Products.findOneAndUpdate({_id: id}, req.body, {new: true}, ((err, product) => {
		if(err){
			res.status(500).send({
				message: 'Failed to execute'
			})
		} else {
			if(!product){
				res.status(404).send({
					message: 'Product not found'
				})
			} else {
				res.status(200).send(product);
			}
		}
	}));
}

function deleteProduct(req, res){
	var idProduct = req.params.id;
	Products.findByIdAndDelete(idProduct).exec((err, product) => {
		if(err){
			res.status(500).send({
				message: 'Failed to execute'
			})
		} else {
			if(!product){
				res.status(404).send({
					message: 'Product not found'
				})
			} else {
				res.json({
					msg: "Producto eliminado"
				})
			}
		}
	})
}

module.exports = {
	saveProduct,
	listAllData,
	searchData,
	updateProduct,
	deleteProduct
};
