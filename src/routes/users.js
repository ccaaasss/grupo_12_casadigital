<<<<<<< HEAD
// Requiero los módulos de node que se van a usar:
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const bcrypt= require('bcrypt');
=======
// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();
>>>>>>> 711c8e57c1d07a309c7bfdfecc7fcdf74c93814e

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const usersController = require("../controllers/usersController.js")

<<<<<<< HEAD
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


// Creación de usuarios 
router.get("/register", usersController.index);
router.post('/', upload.single("image") , usersController.store);


// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", usersController.index);
router.get("/login", usersController.login);

//Boton registro para validar y guardar datos(tira error)
//router.post ('/register, {check('email').isEmail(), check('password').isLength({min:8}).withMessage ('La contraseña debe tener como mínimo 8 caracteres')},userscontroller.processregister')
=======
// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", usersController.index);
router.get("/login", usersController.login);
router.get("/register", usersController.register);
// router.get("/register", usersController.register);
>>>>>>> 711c8e57c1d07a309c7bfdfecc7fcdf74c93814e



module.exports = router;