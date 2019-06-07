module.exports = (sequelize, Sequelize)=>{
    const tbl_subject = sequelize.define('tbl_subject',{
        subject_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        subject_name :{
            type : Sequelize.STRING,
            allowNull : false
        },
        subject_desc : {
            type : Sequelize.STRING,
            allowNull : false
        },
        subject_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        subject_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_subject;
}