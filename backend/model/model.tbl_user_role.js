module.exports = (sequelize,Sequelize)=>{
    const tbl_user_role = sequelize.define('tbl_user_role',{
        ur_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        ur_role : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ur_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        ur_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_user_role;
}