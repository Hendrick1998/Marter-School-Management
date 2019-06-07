module.exports = (sequelize, Sequelize)=>{
    const tbl_attendance = sequelize.define('tbl_attendance',{
        attendance_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        attendance_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        attendance_subject_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        attendance_status : {
            type : Sequelize.BOOLEAN,
            allowNull : false
        },
        attendance_schedule_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        attendance_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        attendance_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_attendance;
};