var app = require('./app');
var mongoose = require('./src/conexDB/conn')
var port = 4000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
