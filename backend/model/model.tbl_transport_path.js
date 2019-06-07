module.exports = (sequelize,Sequelize)=>{
    const tbl_transport_path = sequelize.define('tbl_transport_path',{
        tp_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        tp_transport_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        tp_passenger_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        tp_passenger_type : {
            type : Sequelize.STRING,
            allowNull :false
        },
        tp_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        tp_updated_by : {
            type : Sequelize.STRING,
            allowNull :false
        }
    });
    return tbl_transport_path;
}