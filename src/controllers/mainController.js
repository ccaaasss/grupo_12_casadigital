// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    index: (req, res)=>{ res.render ('home')},

    search: (req, res)=>{ res.render ('home')},

    login: (req, res)=>{ res.render ('./users/login')}, 
};

module.exports = mainController