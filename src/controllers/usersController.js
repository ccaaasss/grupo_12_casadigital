// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const usersController ={
    index: (req, res)=>{ res.render ('home')},

    login: (req, res)=>{ res.render ('./users/login')},

    register: (req,res) =>{res.render ('./users/register')},
    
}

module.exports = usersController