// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    index: (req, res)=>{ res.render ('home')},

    login: (req, res)=>{ res.render ('./users/login')},

    register: (req,res) =>{res.render ('./users/register')},

    productCart: (req,res) =>{res.render ('./products/productCart')},
    
    productDetail: (req,res) =>{res.render ('./products/productDetail')}
}

module.exports = mainController