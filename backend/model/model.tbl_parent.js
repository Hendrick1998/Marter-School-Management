module.exports = (sequelize,Sequelize)=>{
    const tbl_parent = sequelize.define('tbl_parent',{
        parent_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            allowNull : false
        },
        parent_name :{
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_address : {
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_phone : {
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_date_of_birth : {
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_imageURL : {
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_created_by : {
            type : Sequelize.STRING,
            allowNull : false
        },
        parent_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_parent;
};