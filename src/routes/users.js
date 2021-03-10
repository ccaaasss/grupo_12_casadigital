// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const usersController = require("../controllers/usersController.js")

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", usersController.index);
// router.get("/register", usersController.register);



module.exports = router;