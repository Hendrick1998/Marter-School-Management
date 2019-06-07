module.exports = (sequelize,Sequelize)=>{
    const tbl_permission = sequelize.define('tbl_permission',{
        permission_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        permission_ur_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        permission_controller_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        permission_add : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        },
        permission_remove : {
            type: Sequelize.BOOLEAN,
            allowNull : false,
        },
        permission_edit : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        },
        permission_view : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        },
        permission_created_by : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        permission_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_permission;
}