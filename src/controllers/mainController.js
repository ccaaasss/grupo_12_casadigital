//  Requires
const fs = require('fs');
const path = require('path');
const db = require('../data/models');
const sequelize = db.sequelize;

// Lectura de la DB json a formato array de objetos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//  Conversion de números a formato con punto "." como separador de miles:
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    // index: (req, res)=>{
    //     res.render ('home',{products});
    // },
    index: (req,res) => {
       db.Course.findAll(
            {include: [
				{association:"category"},
				{association:"audio"},
				{association:"currency"},
				{association:"subtitles"}
			]},
            {
                order: [
                    ['creation_date', 'DESC']
                ]
            }
        )
        .then(courses => {
            res.render('home', {products: courses, toThousand});
        });
    },

    search: (req, res)=>{ res.render ('home')},
    
    underConstruction: (req, res)=>{ res.render ('./underConstruction')},
};

module.exports = mainController