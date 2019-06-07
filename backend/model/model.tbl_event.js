module.exports = (sequelize, Sequelize)=>{
    const tbl_event = sequelize.define('tbl_event',{
        event_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        event_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        event_desc : {
            type : Sequelize.STRING,
            allowNull : false
        },
        event_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        event_place : {
            type : Sequelize.STRING,
            allowNull : false
        },
        event_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        event_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_event;
}