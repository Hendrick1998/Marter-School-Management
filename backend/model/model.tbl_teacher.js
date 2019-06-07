module.exports = (sequelize,Sequelize)=>{
    const tbl_teacher = sequelize.define('tbl_teacher',{
        teacher_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            allowNull : false
        },
        teacher_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_subject_id : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        teacher_address : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_phone : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_date_of_birth : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_imageURL : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        teacher_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }

    });
    return tbl_teacher;
};