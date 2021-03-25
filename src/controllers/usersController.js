//  Requires
const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


// Lectura de la DB json a formato array de objetos
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const usersController ={

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
        res.redirect('/users/login');
    },

    login: (req, res)=>{ res.render ('./users/login')},

    loginProcess: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            
            for(user of users){
                if(user.email == req.body.email){

                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        userToLogin = user;
                        break;
                    }
                }
            }
            if (userToLogin == undefined){
                return res.render ('./users/login', {errors:[
                    {msg: "Credenciales inválidas"}
                ]});
            }
            req.session.userLogged = userToLogin;
            if (req.body.rememberMe != undefined){
                res.cookie("rememberMe", userToLogin.email, {maxAge: 120000})
            }


            res.render ('./users/userProfile', userToLogin)
            
            

        } else{
            return res.render ('./users/login', {errors:errors.errors});
        }
    },

    logoutProcess: (req, res) => {
        
        req.session.userLogged = undefined;
        res.cookie("rememberMe", "", {maxAge: -1});
        res.redirect ('/');
    }  
}


module.exports = usersController ;