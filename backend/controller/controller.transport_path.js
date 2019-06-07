const db = require('../config/database');

const sequelize = db.sequelize;
const TransportPath = db.tbl_transport_path;

exports.getAllTransportPath = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_TRANSPORT_PATHS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((transportPaths)=>{
        res.send(transportPaths);
        console.log(transportPaths);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.getOneTransportPath = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_TRANSPORT_PATHS WHERE tp_id = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((transportPath)=>{
        res.send(transportPath);
        console.log(transportPath);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.addTransportPath = (req,res)=>{
    TransportPath.create({
        tp_id : req.body.tp_id,
        tp_transport_id : req.body.tp_transport_id,
        tp_passenger_id : req.body.tp_passenger_id,
        tp_passenger_type : req.body.tp_passenger_type,
        tp_created_by : req.body.tp_created_by,
        tp_updated_by : req.body.tp_updated_by
    })
    .then(()=>{
        res.send('Data Inserted Successfully');
        console.log('Data Inserted Successfully');
    })
    .catch((err)=>{
        res.send('Error in Inserting Data'+err);
        console.log('Error in Inserting Data'+err);
    });
}

exports.updateTransportPath = (req,res)=>{
    TransportPath.update({
        tp_transport_id : req.body.tp_transport_id,
        tp_passenger_id : req.body.tp_passenger_id,
        tp_passenger_type : req.body.tp_passenger_type,
        tp_created_by : req.body.tp_created_by,
        tp_updated_by : req.body.tp_updated_by
    },{
        where : {tp_id : req.body.tp_id}
    })
    .then(()=>{
        res.send('Update Data successfully');
        console.log('Update Data successfully');
    })
    .catch((err)=>{
        res.send('Error in updating data : '+err);
        console.log('Error in updating data : '+err);
    });
}

exports.deleteTransportPath = (req,res)=>{
    TransportPath.destroy({
        where : {tp_id : req.body.tp_id}
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