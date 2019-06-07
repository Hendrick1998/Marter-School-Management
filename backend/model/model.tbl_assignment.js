module.exports = (sequelize,Sequelize)=>{
    const tbl_assignment = sequelize.define('tbl_assignment',{
        assignment_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        assignment_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        assignment_subject_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        assignment_class_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        assignment_teacher_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        assignment_desc : {
            type : Sequelize.STRING,
            allowNull : false
        },
        assignment_start_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        assignment_end_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        assignment_type : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        assignment_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        assignment_updated_by : {
            type : Sequelize.STRING,
            allowNull : false,
        },
    });
    return tbl_assignment;
}