module.exports = (sequelize,Sequelize)=>{
    const tbl_academic_year = sequelize.define('tbl_academic_year',{
        academic_year_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        academic_year : {
            type : Sequelize.STRING,
            allowNull :false
        },
        academic_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        academic_updated_by : {
            type : Sequelize.STRING,
            allowNull : false,
        }
    });
    return tbl_academic_year;
};