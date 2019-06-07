module.exports = (sequelize, Sequelize)=>{
    const tbl_exam_type = sequelize.define('tbl_exam_type',{
        exam_type_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        exam_type_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        exam_type_desc : {
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
    return tbl_exam_type;
}