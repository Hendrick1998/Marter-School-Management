module.exports = (sequelize,Sequelize)=>{
    const tbl_driver = sequelize.define('tbl_driver',{
        driver_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        driver_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        driver_phone : {
            type : Sequelize.STRING,
            allowNull : false
        },
        driver_date_of_birth : {
            type : Sequelize.STRING,
            allowNull : false
        },
        driver_address : {
            type : Sequelize.STRING,
            allowNull : false
        },
        driver_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        driver_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_driver;
};