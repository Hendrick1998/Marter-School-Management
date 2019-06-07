module.exports = (sequelize,Sequelize)=>{
    const tbl_transport = sequelize.define('tbl_transport',{
        transport_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        transport_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        transport_driver_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        transport_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        transport_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_transport;
}