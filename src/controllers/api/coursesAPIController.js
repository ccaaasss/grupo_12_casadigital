const db = require('../../data/models');
const sequelize = db.sequelize;


const coursesAPIController = {
    'list': (req, res) => {
        db.Course.findAll(
            {
            include: ['category'],
            attributes: ['id','course_title','short_description']
        }
          )
        .then(courses => {
            let cursos = courses.map(course=>{
                course = {...course, url:"/api/course/`${course.id}`"}
            })
            let respuesta = {
                meta: {
                    count: courses.length,
                    countByCategory: "Prueba",
                },

                data: cursos

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

module.exports = coursesAPIController;