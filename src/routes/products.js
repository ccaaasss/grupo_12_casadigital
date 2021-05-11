// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
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

//  Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento

// Listado de productos para admin

router.get("/productList", authMiddleware, productsController.productList);

//  Creación de productos
router.get("/newProduct", authMiddleware, productsController.create);
router.post('/', upload.single("image") , productsController.store);

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
router.put('/:id', upload.single("image") , productsController.update);

//  Borrado de productos
router.delete('/:id', productsController.destroy);

//  Aqui irán las rutas para procesar las compras.

router.get("/productCart", authMiddleware, productsController.productCart);


module.exports = router;