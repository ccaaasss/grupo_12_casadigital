function guestMiddleware (req, res, next){
    if(req.session.userLogged == undefined){
        next();
    } else{
        let userToLogin = req.session.userLogged;
        res.render ('./users/userProfile', userToLogin)
    };

};

module.exports = guestMiddleware;