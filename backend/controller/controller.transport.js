const db = require('../config/database');

const sequelize = db.sequelize;
const Transport = db.tbl_transport;

exports.getAllTransport = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_TRANSPORTS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((transports)=>{
        res.send(transports);
        console.log(transports);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.getOneTransport = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_TRANSPORTS WHERE TRANSPORT_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((transport)=>{
        res.send(transport);
        console.log(transport);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.addTransport = (req,res)=>{
    Transport.create({
      transport_id : req.body.transport_id,
      transport_name : req.body.transport_name,
      transport_driver_id : req.body.transport_driver_id,
      transport_created_by : req.body.transport_created_by,
      transport_updated_by : req.body.transport_updated_by  
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

exports.updateTransport = (req,res)=>{
    Transport.update({
        transport_name : req.body.transport_name,
      transport_driver_id : req.body.transport_driver_id,
      transport_created_by : req.body.transport_created_by,
      transport_updated_by : req.body.transport_updated_by
    },{
        where : {transport_id : req.body.transport_id}
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

exports.deleteTransport = (req,res)=>{
    Transport.destroy({
        where : {transport_id : req.body.transport_id}
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
