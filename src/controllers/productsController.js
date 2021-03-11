//  Requires
const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');

// Lectura de la DB json a formato array de objetos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//  Conversion de números a formato con punto "." como separador de miles:
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const productsController ={

    index: (req, res)=>{
        let categories = [];
        products.forEach((product)=>{
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            };
        });
        res.render("./products/products",{products, categories, toThousand});
    },

    create: (req,res) =>{res.render ('./products/newProduct')},

    store: (req,res) =>{

    },

    detail: (req,res) =>{res.render ('./products/productDetail')},

    edit: (req,res) =>{
        res.render ('./products/editProduct')
    },

    update: (req,res) =>{

    },

    destroy: (req,res) =>{

    },
    

    productCart: (req,res) =>{res.render ('./products/productCart')},
    
}

module.exports = productsController