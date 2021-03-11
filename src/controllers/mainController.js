//  Requires
const fs = require('fs');
const path = require('path');

// Lectura de la DB json a formato array de objetos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    index: (req, res)=>{
        res.render ('home',{products});
    },

    search: (req, res)=>{ res.render ('home')},

    login: (req, res)=>{ res.render ('./users/login')}, 
};

module.exports = mainController