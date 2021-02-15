// Requiero el módulo "path"
const path=require("path");

// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    index: (req, res)=>{ res.sendFile(path.resolve("views/home.html"))},

    login: (req, res)=>{ res.sendFile(path.resolve("views/users/login.html"))},

    register: (req,res) =>{res.sendFile (path.resolve ('views/users/register.html'))},

    productCart: (req,res) =>{res.sendFile (path.resolve ('views/products/productCart.html'))},
    
    productDetail: (req,res) =>{res.sendFile (path.resolve ('views/products/productDetail.html'))}
}

module.exports = mainController