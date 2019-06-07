module.exports = (sequelize,Sequelize)=>{
    const tbl_class = sequelize.define('tbl_class',{
        class_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        class_no : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        class_created_by : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        class_updated_by : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return tbl_class;
};