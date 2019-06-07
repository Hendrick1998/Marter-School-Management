module.exports = (sequelize,Sequelize)=>{
    const tbl_exam = sequelize.define('tbl_exam',{
        exam_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        exam_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_desc : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_type_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        exam_start_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_end_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_exam;
};