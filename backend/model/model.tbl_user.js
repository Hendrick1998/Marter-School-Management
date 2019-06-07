module.exports = (sequelize,Sequelize)=>{
    const tbl_user = sequelize.define('tbl_user',{
        user_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        user_name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        user_phone : {
            type : Sequelize.STRING,
            allowNull : false
        },
        user_pass : {
            type : Sequelize.STRING,
            allowNull : false
        },
        user_ur_id : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        user_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        user_updated_by : {
            type : Sequelize.STRING,
            allowNull : false,
        }
    });
    return tbl_user;
}