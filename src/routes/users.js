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
let validateUserLogin = [
    check("email")
        .notEmpty().withMessage("Debes introducir un email").bail()
        .isEmail().withMessage("Email invalido. Ingresa un email con formato válido: user@dominio.com").bail(),
        
    check("password")
        .isLength({min: 8}).withMessage("La contraseña debe tener entre 8 y 15 caracteres").bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).withMessage("La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un caracter especial")
];
let validateUserStore = [
    check("first_name")
        .notEmpty().withMessage("Debes introducir un nombre").bail()
        .isLength({min: 2}).withMessage("El nombre debe tener al menos 2 caracteres"),

    check("last_name")
        .notEmpty().withMessage("Debes introducir un apellido").bail()
        .isLength({min: 2}).withMessage("El apellido debe tener al menos 2 caracteres"),

    check("email")
        .notEmpty().withMessage("Debes introducir un email").bail()
        .isEmail().withMessage("Email invalido. Ingresa un email con formato válido: user@dominio.com"),

    check("password")
        .isLength({min: 8}).withMessage("La contraseña debe tener entre 8 y 15 caracteres").bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).withMessage("La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un caracter especial"),

    check("birth_date")
        .notEmpty().withMessage("Debes introducir tu fecha de nacimiento").bail(),

    check("image").custom((value, {req}) =>{
        switch(path.extname(req.file.originalname)){
            case ".jpg": return ".jpg";
            break;
            case ".jpeg": return ".jpeg";
            break;
            case ".png": return ".png";
            break;
            case ".gif": return ".gif";
            break;

            default: return false
        }
    }).withMessage("Solo se admiten imágenes .jpg, .jpeg, .png, .gif")
];

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento

// Creación de usuarios 
router.get("/register", guestMiddleware, usersController.register);
router.post('/', upload.single("image"), validateUserStore, usersController.store);

// Perfil de usuarios
router.get("/userProfile", usersController.userProfile);

// Proceso de formulario de Login

router.get("/login", guestMiddleware, usersController.login);
router.post("/login", validateUserLogin, usersController.loginProcess);
router.post("/logout", usersController.logoutProcess);

module.exports = router;