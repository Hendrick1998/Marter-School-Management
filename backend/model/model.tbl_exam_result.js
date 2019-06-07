module.exports = (sequelize,Sequelize)=>{
    const tbl_exam_result = sequelize.define('tbl_exam_result',{
        er_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        er_exam_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        er_subject_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        er_student_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        er_marks : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        er_status : {
            type : Sequelize.STRING,
            allowNull : false
        },
        er_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        er_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_exam_result;
};