const db = require('../../data/models');
const sequelize = db.sequelize;


const coursesAPIController = {
    'list': async (req, res) => {
        let courses = await db.Course.findAll(
            {
            include: ['category'],
            attributes: ['id','course_title','short_description']
            }
        );        
        let coursesURL = courses.map(course =>{            
            course.dataValues.url = `/api/courses/${course.id}`;
            return course
        });
        let respuesta = {
            meta: {
                count: courses.length,
                countByCategory: "Prueba",
            },
            data: coursesURL
        };
        res.json(respuesta);
    },
    'detail': async (req, res) => {
        let course = await db.Course.findByPk (req.params.id,
			{include: [
				{association:"category"},
				{association:"audio"},
				{association:"currency"},
				{association:"subtitles"}
			]});
        course.dataValues.image = `/images/products/${course.image}`;
        res.json(course);
    }

};

module.exports = coursesAPIController;