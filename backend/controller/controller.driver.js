const db = require('../config/database');

const sequelize = db.sequelize;
const Driver = db.tbl_driver;

exports.getAllDriver = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_DRIVERS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((drivers)=>{
        res.send(drivers);
        console.log(drivers);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneDriver = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_DRIVERS WHERE DRIVER_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((driver)=>{
        res.send(driver);
        console.log(driver);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addDriver = (req,res)=>{
    Driver.create({
        driver_id : req.body.driver_id,
        driver_name : req.body.driver_name,
        driver_phone : req.body.driver_phone,
        driver_date_of_birth : req.body.driver_date_of_birth,
        driver_address : req.body.driver_address,
        driver_created_by : req.body.driver_created_by,
        driver_updated_by : req.body.driver_updated_by
    })
    .then(()=>{
        res.send('Data INSERTED successfully');
        console.log('Data INSERTED successfully');
    })
    .catch((err)=>{
        res.send('Error in INSERTING data : '+err);
        console.log('Error in INSERTING data : '+err);
    })
}

exports.updateDriver = (req,res)=>{
    Driver.update({
        driver_name : req.body.driver_name,
        driver_phone : req.body.driver_phone,
        driver_date_of_birth : req.body.driver_date_of_birth,
        driver_address : req.body.driver_address,
        driver_created_by : req.body.driver_created_by,
        driver_updated_by : req.body.driver_updated_by
    },{
        where : {driver_id : req.body.driver_id}
    })
    .then(()=>{
        res.send('Data UPDATED successfully');
        console.log('Data UPDATED successfully');
    })
    .catch((err)=>{
        res.send('Error in UPDATING data : '+err);
        console.log('Error in UPDATING data : '+err);
    })
}

exports.deleteDriver = (req,res)=>{
    Driver.destroy({
        where : {driver_id : req.body.driver_id}
    })
    .then(()=>{
        res.send('Data DELETED successfully');
        console.log('Data DELETED successfully');
    })
    .catch((err)=>{
        res.send('Error in DELETING data : '+err);
        console.log('Error in DELETING data : '+err);
    });
}