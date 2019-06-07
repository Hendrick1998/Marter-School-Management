const db = require('../config/database');
const sequelize = db.sequelize;
const Controller = db.tbl_controller;

exports.getAllController = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_CONTROLLERs';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((controllers)=>{
        res.send(controllers);
        console.log(controllers);
    })
    .catch((err)=>{
        res.send('Error in retrieving data : '+err);
        console.log('Error in retrieving data : '+err);
    });
}

exports.getOneController = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_CONTROLLERs WHERE CONTROLLER_ID = ?';

    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((controller)=>{
        res.send(controller);
        console.log(controller);
    })
    .catch((err)=>{
        res.send('Error in retrieving data : '+err);
        console.log('Error in retrieving data : '+err);
    });
}

exports.addController = (req,res)=>{

    Controller.create({
        controller_id : req.body.controller_id,
        controller_name : req.body.controller_name,
        controller_desc : req.body.controller_desc,
        controller_created_by : req.body.controller_created_by,
        controller_updated_by : req.body.controller_updated_by
    })
    .then(()=>{
        console.log('Data inserted successfully');
        res.send('Data inserted successfully');
    })
    .catch((err)=>{
        console.log('Error in inserting data : '+err);
        res.send('Error in inserting data : '+err);
    });
}

exports.updateController = (req,res)=>{
    Controller.update({
        controller_name : req.body.controller_name,
        controller_desc : req.body.controller_desc,
        controller_created_by : req.body.controller_created_by,
        controller_updated_by : req.body.controller_updated_by
    },{
        where : {
            controller_id : req.body.controller_id
        }
    })
    .then(()=>{
        console.log('Data updated successfully');
        res.send('Data updated successfully');
    })
    .catch((err)=>{
        console.log('Error in updating data : '+err);
        res.send('Error in updating data : '+err);
    });
}

exports.deleteController = (req,res)=>{
    Controller.destroy({
        where : {controller_id : req.body.controller_id}
    })
    .then(()=>{
        res.send('Delete data successfully');
        console.log('Delete data successfully');
    })
    .catch((err)=>{
        res.send('Error in deleting data : '+err);
        console.log('Error in deleting data : '+err);
    });
}