// Requiero los módulos de node que se van a usar:
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const express_validator = require("express-validator");
const bcrypt= require('bcrypt');
// Middleware que sólo permite acceder a ciertas rutas si NO se está loggeado:
const guestMiddleware = require("../middlewares/guestMiddleware");


// Requiero el controller al que apuntan las rutas que defino maás abajo:
const usersController = require("../controllers/usersController.js")

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/users");
    },
    filename: (req, file, cb) => {
        const newImageName = "img-" + Date.now() + path.extname(file.originalname);
        cb(null, newImageName );
    }
});

const upload = multer({storage: storage});

/* Validaciones */
const {check} = require("express-validator");
let validateLogin = [
    check("email").isEmail().withMessage("Email invalido"),
    check("password").isLength({min: 8}).withMessage("la contraseña debe tener al menos 8 caracteres")
];

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento

// Creación de usuarios 
router.get("/register", guestMiddleware, usersController.register);
router.post('/', upload.single("image") , usersController.store);

// Perfil de usuarios
router.get("/userProfile", usersController.userProfile);

// Proceso de formulario de Login

router.get("/login", guestMiddleware, usersController.login);
router.post("/login", validateLogin, usersController.loginProcess);
router.post("/logout", usersController.logoutProcess);

module.exports = router;