// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const express_validator = require("express-validator");
// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const productsController = require("../controllers/productsController.js")

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/products");
    },
    filename: (req, file, cb) => {
        const newImageName = "img-" + Date.now() + path.extname(file.originalname);
        cb(null, newImageName );
    }
});

const upload = multer({storage: storage});
/* Validaciones */
const {check} = require("express-validator");
let validateNewProduct = [

    check("course_title")
        .notEmpty().withMessage("Debes introducir un nombre").bail()
        .isLength({min: 5}).withMessage("El título debe tener al menos 5 caracteres"),

    check("short_description")
        .notEmpty().withMessage("Debes introducir una descripción").bail()
        .isLength({min: 20}).withMessage("La descripción debe contener al menos 20 caracteres"),
    
    check("long_description")
        .notEmpty().withMessage("Debes introducir una descripción más extensa").bail()
        .isLength({min: 20}).withMessage("La descripción debe contener al menos 20 caracteres"),
        
        
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
        }).withMessage("Solo se admiten imágenes .jpg, .jpeg, .png, .gif"),
    
    check("category_id")
        .notEmpty().withMessage("Debes seleccionar una categoria").bail(),
    
    check("requirements")
        .notEmpty().withMessage("Debes introducir un requerimiento").bail(),
    
    check("who_can")
        .notEmpty().withMessage("Debes describir a quién puede participar").bail()
        .isLength({min: 20}).withMessage("Debes agregar al menos 20 caracteres"),
    
    check("audio_id")
        .notEmpty().withMessage("Debes seleccionar una categoria").bail(),
    
    check("price")
        .notEmpty().withMessage("Debes fijar un valor").bail(),
    
    check("discount")
        .notEmpty().withMessage("Debes fijar un valor").bail(),
        
    check("currency_id")
        .notEmpty().withMessage("Debes seleccionar una moneda").bail(),
    
    check("course_owner")
    .notEmpty().withMessage("Debes introducir un nombre").bail()
    .isLength({min: 5}).withMessage("El título debe tener al menos 5 caracteres"),

   

    
];


//  Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento

// Listado de productos para admin

router.get("/productList", authMiddleware, productsController.productList);

//  Creación de productos
router.get("/newProduct", authMiddleware, productsController.create);
<<<<<<< HEAD
router.post('/', upload.single("image") ,validateNewProduct, productsController.store);
=======
router.post('/', upload.single("image") , productsController.store);
>>>>>>> 4ea771a05e76b16dd2e40e7233db053e5a8447c3

//  Listado de productos:
router.get("/", productsController.index);

//  Listado de productos de una categoría:
router.get("/:category", productsController.byCategory);

//  Listado de productos de por docente (Comunidad):
router.get("/community/:community", productsController.byCommunity);

//  Detalle de un producto particular
router.get("/:id/productDetail", productsController.detail);

//  Edición de productos
router.get('/:id/edit', authMiddleware, productsController.edit); 
router.put('/:id', upload.single("image") ,validateNewProduct, productsController.update);

//  Borrado de productos
router.delete('/:id', productsController.destroy);

//  Aqui irán las rutas para procesar las compras.

router.get("/productCart", authMiddleware, productsController.productCart);






module.exports = router;