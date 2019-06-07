module.exports = (sequelize,Sequelize)=>{
    const tbl_student = sequelize.define('tbl_student',{
        student_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            allowNull : false
        },
        student_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        student_roll_no : {
            type : Sequelize.STRING,
            allowNull : false
        },
        student_year : {
            type : Sequelize.STRING,
            allowNull :false
        },
        student_address : {
            type : Sequelize.STRING,
            allowNull : false
        },
        student_date_of_birth : {
            type : Sequelize.STRING,
            allowNull :false
        },
        student_phone : {
            type : Sequelize.STRING,
            allowNull : false
        },
        student_parent_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        student_imageURL: {
            type : Sequelize.STRING,
            allowNull :false
        },
        student_created_by : {
            type : Sequelize.STRING,
            allowNull :false,
        },
        student_updated_by : {
            type : Sequelize.STRING,
            allowNull :false
        }
    });
    return tbl_student;
}