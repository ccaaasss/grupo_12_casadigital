// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const mainController = require("../controllers/mainController")

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", mainController.index);

router.get("/login", mainController.login);

router.get("/register", mainController.register);

router.get("/productCart", mainController.productCart);

router.get("/productDetail", mainController.productDetail);

module.exports = router;