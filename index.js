var app = require('./app');
var port = 4000;
app.listen(process.env.PORT || port, () => {
	console.log(`Server is running on port ${port}`)
})
