const db = require('../config/database');

const sequelize = db.sequelize;
const Permission = db.tbl_permission;

exports.getAllPermission = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_PERMISSIONS';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((permissions)=>{
        res.send(permissions);
        console.log(permissions);
    })
    .catch((err)=>{
        res.send('Error in Retrieving data : '+err);
        console.log('Error in Retrieving data : '+err);
    });
}

exports.getOnePermission = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_PERMISSIONS WHERE PERMISSION_ID = ?';

    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((permission)=>{
        res.send(permission);
        console.log(permission);
    })
    .catch((err)=>{
        res.send('Error in Retrieving data : '+err);
        console.log('Error in Retrieving data : '+err);
    });
}

exports.addPermission = (req,res)=>{

    Permission.create({
        permission_id : req.body.permission_id,
        permission_ur_id : req.body.permission_ur_id,
        permission_controller_id : req.body.permission_controller_id,
        permission_add : req.body.permission_add,
        permission_remove : req.body.permission_remove,
        permission_edit : req.body.permission_edit,
        permission_view : req.body.permission_view,
        permission_created_by : req.body.permission_created_by,
        permission_updated_by : req.body.permission_updated_by
    })
    .then(()=>{
        console.log('Data inserted successfully');
        res.send('Data inserted successfully');
    })
    .catch((err)=>{
        console.log('Error in inserting data'+err);
        res.send('Error in inserting data'+err);
    });
}

exports.updatePermission = (req,res)=>{
    Permission.update({
        permission_ur_id : req.body.permission_ur_id,
        permission_controller_id : req.body.permission_controller_id,
        permission_add : req.body.permission_add,
        permission_remove : req.body.permission_remove,
        permission_edit : req.body.permission_edit,
        permission_view : req.body.permission_view,
        permission_created_by : req.body.permission_created_by,
        permission_updated_by : req.body.permission_updated_by
    },{
        where : {
            permission_id : req.body.permission_id,
        }
    })
    .then(()=>{
        res.send('Data updated successfully');
        console.log('Data updated successfully');
    })
    .catch((err)=>{
        res.send('Error in updating data : '+err);
        console.log('Error in updating data : '+err);
    });
}

exports.deletePermission = (req,res)=>{
    Permission.destroy({
        where : {
            permission_id : req.body.permission_id,
        }
    })
    .then(()=>{
        res.send('Data deleted successfully');
        console.log('Data deleted successfully');
    })
    .catch((err)=>{
        res.send('Error in deleting data : '+err);
        console.log('Error in deleting data : '+err);
    });
}