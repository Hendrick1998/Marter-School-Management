const db = require('../config/database');

const sequelize = db.sequelize;
const Event = db.tbl_event;

exports.getAllEvents = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_EVENTS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((events)=>{
        res.send(events);
        console.log(events);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneEvents = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_EVENTS WHERE EVENT_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((event)=>{
        res.send(event);
        console.log(event);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addEvent = (req,res)=>{
    Event.create({
        event_id : req.body.event_id,
        event_name : req.body.event_name,
        event_desc : req.body.event_desc,
        event_date : req.body.event_date,
        event_place : req.body.event_place,
        event_created_by : req.body.event_created_by,
        event_updated_by : req.body.event_updated_by
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

exports.updateEvent = (req,res)=>{
    Event.update({
        event_name : req.body.event_name,
        event_desc : req.body.event_desc,
        event_date : req.body.event_date,
        event_place : req.body.event_place,
        event_created_by : req.body.event_created_by,
        event_updated_by : req.body.event_updated_by
    },{
        where : {event_id : req.body.event_id}
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

exports.deleteEvent = (req,res)=>{
    Event.destroy({
        where : {event_id : req.body.event_id}
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