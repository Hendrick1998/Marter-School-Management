const db = require('../config/database');
const sequelize = db.sequelize;
const UserRole = db.tbl_user_role;

exports.getAllUserRole = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_USER_ROLES';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((userRoles)=>{
        console.log(userRoles);
        res.send(userRoles);
    })
    .catch((err)=>{
        console.log('Error in Retrieving Data : '+err);
        res.send('Error in Retrieving Data : '+err);
    });
}

exports.getOneUerRole = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_USER_ROLES WHERE UR_ID = ?';

    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((userRole)=>{
        console.log(userRole);
        res.send(userRole);
    })
    .catch((err)=>{
        console.log('Error in Retrieving Data : '+err);
        res.send('Error in Retrieving Data : '+err);
    });
}

exports.addUserRole = (req,res)=>{

    UserRole.create({
        ur_id : req.body.ur_id,
        ur_role : req.body.ur_role,
        ur_created_by : req.body.ur_created_by,
        ur_updated_by : req.body.ur_updated_by
    })
    .then(()=>{
        console.log('Data inserted successfully');
        res.send('Data inserted successfully');
    })
    .catch((err)=>{
        console.log('Error in inserting data : ',err);
        res.send('Error in inserting data : ',err);
    });
}

exports.updateUserRole = (req,res)=>{

    UserRole.update({
        ur_role : req.body.ur_role,
        ur_created_by : req.body.ur_created_by,
        ur_updated_by : req.body.ur_updated_by
    },{
        where : {ur_id : req.body.ur_id}
    })
    .then(()=>{
        console.log('Data updated successfully');
        res.send('Data updated successfully');
    })
    .catch((err)=>{
        console.log('Error in updating data : ',err);
        res.send('Error in updating data : ',err);
    });
}

exports.deleteUserRole = (req,res)=>{
    UserRole.destroy({
        where : {ur_id : req.body.ur_id}
    })
    .then(()=>{
        console.log('Data deleted successfully');
        res.send('Data deleted successfully');
    })
    .catch((err)=>{
        console.log('Error in deleting data : '+err);
        res.send('Error in deleting data : '+err);
    });
}