const db = require('../../data/models');
const sequelize = db.sequelize;


const usersAPIController = {
    'list': async (req, res) => {
        await db.User.findAll({
            attributes: ['id','first_name','last_name','email']
        })
        .then(users => {
            let respuesta = {
                meta: {
                    count: users.length,
                },
                Product: users
            }
                res.json(respuesta);
            })
    },
    // 'detail': (req, res) => {
    //     db.Course.findByPk(req.params.id)
    //         .then(course => {
    //             res.status(200).json({
    //                 meta: {
    //                     status: 200,
    //                     total: course.lenght,
    //                     url: "api/:id/courses",
    //                 },
    //                 data: course,  
    //             });
    //         });
    // }

}

module.exports = usersAPIController;