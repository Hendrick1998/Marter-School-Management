module.exports = (sequelize,Sequelize)=>{
    const tbl_assignment_result = sequelize.define('tbl_assignment_result',{
        ar_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        ar_assignment_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        ar_student_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        ar_assignment_marks : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ar_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ar_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_assignment_result;
};