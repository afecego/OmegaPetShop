var express = require('express');
var app = express();
var products_routers = require('./src/routes/productsRoutes');
const conectarDB = require('./src/config/conn')
const cors = require("cors");
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const authRoutes = require('./src/routes/authRoutes')

conectarDB();

//Habilite express.json
app.use(express.json({ extended: true }));
app.use(express.urlencoded({
	extended: true
}));

//configurar cabeceras y cors
app.use(cors());

app.use("/api/products", products_routers)
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/auth", authRoutes)

module.exports = app;
