//  Requires
const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');

// Lectura de la DB en formato de Sequelize
const db = require("../data/models");

// Lectura de la DB json a formato array de objetos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



//  Conversion de números a formato con punto "." como separador de miles:
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const productsController ={

// Muestra todos los productos ordenados en categorías
   /* index: (req, res)=>{
        let categories = [];
        products.forEach((product)=>{
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            };
        });
        res.render("./products/products",{products, categories, toThousand});
    }, */
	
	index: async (req, res)=>{
		let categories = await db.Category.findAll()
        let courses = await db.Course.findAll({include: ['category']})
        
        res.render("./products/products", {products: courses, categories});
                
    },

// Muestra todos los productos de la categoría seleccionada:
	byCategory: async (req, res)=>{
		/* let categories = [];
		categories.push(req.params.category);
		res.render("./products/products",{products, categories, toThousand}); */
		
		let categories = await db.Category.findAll({
			where:{ category_name: req.params.category }
		})
        let courses = await db.Course.findAll({include: ['category']})
        
        res.render("./products/products", {products: courses, categories});


	},

// Muestra todos los productos de la categoría seleccionada:
	byCommunity: async (req, res)=>{
		/* let community = req.params.community;		
		res.render("./products/community",{products, community, toThousand}); */
		let community = req.params.community;
		let courses = await db.Course.findAll({include: ['category']})
		res.render("./products/community",{products: courses, community});
	},


// Envia al form to create
    create: async (req,res) =>{
		let categories = await db.Category.findAll();
		let audioLangs = await db.Audio.findAll();
		let subtitles = await db.Subtitle.findAll()
		let currencies = await db.Currency.findAll() 
		res.render ('./products/newProduct', {categories, currencies, audioLangs, subtitles})
	},

// Crea - Method To create
    store: (req,res) =>{
		let image		
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = 'default-image.jpg'
		}

			db.Course.create ({
			...req.body,
			image: image,
            creation_date: new Date(),
			})
			.then(products =>{
                res.redirect ('./products')
			})
		},

    detail: async (req,res) =>{
        /* let product = products.find( product => product.id == req.params.id ); */
        
		let course = await db.Course.findByPk (req.params.id,
			{include: [
				{association:"category"},
				{association:"audio"},
				{association:"currency"},
				{association:"subtitles"}
			]});

        res.render ('./products/productDetail', {product: course, toThousand})
    },

// Envia formulario de edicion
    edit: async (req,res) =>{
        /* let productToEdit = products.find(product=>product.id==req.params.id) */
		let categories = await db.Category.findAll();
		let audioLangs = await db.Audio.findAll();
		let subtitles = await db.Subtitle.findAll()
		let currencies = await db.Currency.findAll()

		let courseToEdit = await db.Course.findByPk (req.params.id,
			{include: [
				{association:"category"},
				{association:"audio"},
				{association:"currency"},
				{association:"subtitles"}
			]});

        res.render ('./products/editProduct',{productToEdit: courseToEdit, categories, currencies, audioLangs, subtitles, toThousand})
    },

// EDITA - Method to Update
	update: async (req, res) => {
		/* let id = req.params.id;
		let productToEdit = products.find(product => product.id == id) */
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}
		/* 
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' ')); */

		await db.Course.update(
            {...req.body},
            {
                where: {id: req.params.id}
            }
        );
		res.redirect('/products');
	},

    destroy: async (req,res) =>{

		/* let productsEdited = products.filter((product) => {
			return (product.id != req.params.id);
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(productsEdited, null, " "));
		res.redirect("/products/"); */

		let courseToDelete = await db.Course.findByPk(req.params.id,{include:['subtitles']});
		await courseToDelete.destroy();
		res.redirect("/products/");

    },
    

    productCart: (req,res) =>{res.render ('./products/productCart')},
    
}

module.exports = productsController