//  Requires
const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { use } = require('../routes/users');


// Lectura de la DB json a formato array de objetos
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const usersController ={
    // index: (req, res)=>{ res.render ('./users/')},

    login: (req, res)=>{ res.render ('./users/login')},

    register: (req, res)=>{ res.render ('./users/register')}, 
    // Crea - Method To create
    store: (req,res) =>{
        let image
        
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'default-avatar.jpg'
        }
        
        let ids = users.map(p=>p.id)
        let newUser = {
            id: Math.max(...ids)+1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            birth_date: req.body.birth_date,
            image: image
    
            
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify( users, null, ' '));
        res.redirect('/users/register');
    },
    loginProcess: (req, res) => {
        let userToLogin = users.find( user => user.email == req.params.email );
        console.log(userToLogin);
        if(userToLogin != undefined && bcryptjs.compareSync(req.body.password, userToLogin.password )) {            
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                res.render("./users/profile", {userToLogin: userToLogin})
            } else {
                res.redirect("./users/login")

            }

        }
}


module.exports = usersController ;