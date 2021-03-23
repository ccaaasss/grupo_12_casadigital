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

// Muestra todos los productos ordenados en categorías
    index: (req, res)=>{
        let categories = [];
        products.forEach((product)=>{
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            };
        });
        res.render("./products/products",{products, categories, toThousand});
    },

// Muestra todos los productos de la categoría seleccionada:
	byCategory: (req, res)=>{
		let categories = [];
		categories.push(req.params.category);
		res.render("./products/products",{products, categories, toThousand});
	},

// Muestra todos los productos de la categoría seleccionada:
	byCommunity: (req, res)=>{
		let community = req.params.community;		
		res.render("./products/community",{products, community, toThousand});
	},


// Envia al form to create
    create: (req,res) =>{res.render ('./products/newProduct')},

// Crea - Method To create
    store: (req,res) =>{
		let image
		
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = 'default-image.jpg'
		}
		
		let ids = products.map(p=>p.id)
		let newProduct = {
			id: Math.max(...ids)+1,
			...req.body,
			image: image,
            creation_date: new Date(),
            currency: 'ARS',
            audio: "Ingles",
            subtitles: "Español",
            course_owner: "Profesor Ejemplo"
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
    },

    detail: (req,res) =>{
        let product = products.find( product => product.id == req.params.id );
        
        res.render ('./products/productDetail', {product, toThousand})
    },

// Envia formulario de edicion
    edit: (req,res) =>{
        let productToEdit = products.find(product=>product.id==req.params.id)
        res.render ('./products/editProduct',{productToEdit,toThousand})
    },

// EDITA - Method to Update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

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

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/products');
	},

    destroy: (req,res) =>{
		let productsEdited = products.filter((product) => {
			return (product.id != req.params.id);
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(productsEdited, null, " "));
		res.redirect("/products/");
    },
    

    productCart: (req,res) =>{res.render ('./products/productCart')},
    
}

module.exports = productsController