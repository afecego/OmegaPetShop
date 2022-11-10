//Rutas para autenticar usuarios

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// Autentica un usuario
// api/auth
router.post(
  "/",
  [
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser mínimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  authController.autenticarUsuario
);

router.get('/',auth,authController.usuarioAutenticado)

module.exports = router;
