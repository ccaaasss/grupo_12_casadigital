// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const usersController ={
    index: (req, res)=>{ res.render ('./users/register')},

    login: (req, res)=>{ res.render ('./users/login')},

    register: (req, res)=>{ res.render ('./users/register')},

    // register: armar método POST register

    
}

module.exports = usersController