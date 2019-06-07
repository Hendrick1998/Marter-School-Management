module.exports = (sequelize,Sequelize)=>{
    const tbl_schedule = sequelize.define('tbl_schedule',{
        schedule_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        schedule_day : {
            type : Sequelize.STRING,
            allowNull : false
        },
        schedule_start_time : {
            type : Sequelize.STRING,
            allowNull : false
        },
        schedule_end_time : {
            type : Sequelize.STRING,
            allowNull : false
        },
        schedule_teacher_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        schedule_subject_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        schedule_ac_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        schedule_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        schedule_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_schedule;
};