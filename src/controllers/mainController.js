//  Requires
const db = require('../data/models');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

//  Conversion de números a formato con punto "." como separador de miles:
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Defino en cada método del controlador cuál será la respuesta a cada requerimiento
const mainController ={
    index: async (req,res) => {
        const courses = await db.Course.findAll(
            {include: [
				{association:"currency"},
                {association:"category"},
				{association:"audio"},
				{association:"subtitles"}
			],
            order : [['id','DESC']]    
        }
        );
       
        res.render('home', {products: courses, toThousand});
    },

    search: async (req,res) => {
        const searchResult = await db.Course.findAll(
            {include: [
				{association:"currency"},
                {association:"category"},
				{association:"audio"},
				{association:"subtitles"}
			],
            where: {
                [Op.or]: [
                  {
                    course_title: {[Op.like]:"%" + req.body.search + "%"}
                  },
                  {
                    course_title: {[Op.like]:"%" + req.body.search.toLowerCase() + "%"}
                  }
                ]
              }            
        }
        );
        let search = req.body.search;
        res.render("./products/productsSearch", {products: searchResult, search, toThousand});
       
    },
    
    underConstruction: (req, res)=>{ res.render ('./underConstruction')},
};

module.exports = mainController