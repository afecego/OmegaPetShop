const mongoose = require('mongoose');

mongoose
	.connect("mongodb://localhost:27017/OmegaPetShop",{
		//useNewUrlParser: true,
	}, (err, res) => {
		if(err) {
			throw err;
		}
		else {
			console.log("Database conecction successful");
		}
	});

	module.exports = mongoose;
