module.exports = (sequelize, dataTypes) => {
    let alias = 'Subtitle';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        ccLang: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
    };
    let config = {
        tableName: 'subtitles',
        timestamps: false
    }
    const Subtitle = sequelize.define(alias, cols, config); 

    Movie.belongsToMany(models.Course, {
        as: 'courses',
        through: 'course_subtitle',
        foreignKey:'id_subtitle',
        otherKey:'is_course',
        timestamps: false,
    })

    return Subtitle
};