module.exports = (sequelize,Sequelize)=>{
    const tbl_academic_class = sequelize.define('tbl_academic_class',{
        ac_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        ac_academic_year_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        ac_class_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        ac_teacher_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        ac_year : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ac_section : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ac_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ac_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_academic_class;
}