module.exports = (sequelize, Sequelize)=>{
    const tbl_academic_student = sequelize.define('tbl_academic_student',{
        as_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        as_student_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        as_ac_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        as_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        as_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_academic_student;
}