module.exports = (sequelize, Sequelize)=>{
    const tbl_controller = sequelize.define('tbl_controller',{
        controller_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        controller_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        controller_desc : {
            type : Sequelize.STRING,
            allowNull : true,
        },
        controller_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        controller_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_controller;
}