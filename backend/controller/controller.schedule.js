const db = require('../config/database');

const sequelize = db.sequelize;
const Schedule = db.tbl_schedule;

exports.getAllSchedule = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_SCHEDULES';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((schedules)=>{
        console.log(schedules);
        res.send(schedules)
    })
    .catch((err)=>{
        console.log('Error in RETRIEVING data : '+err);
        res.send('Error in RETRIEVING data : '+err);
    });
}

exports.getOneSchedule = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_SCHEDULES WHERE SCHEDULE_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((schedule)=>{
        console.log(schedule);
        res.send(schedule);
    })
    .catch((err)=>{
        console.log('Error in RETRIEVING data : '+err);
        res.send('Error in RETRIEVING data : '+err);
    });
}

exports.addSchedule = (req,res)=>{
    Schedule.create({
        schedule_id : req.body.schedule_id,
        schedule_day : req.body.schedule_day,
        schedule_start_time : req.body.schedule_start_time,
        schedule_end_time : req.body.schedule_end_time,
        schedule_teacher_id : req.body.schedule_teacher_id,
        schedule_subject_id : req.body.schedule_subject_id,
        schedule_ac_id : req.body.schedule_ac_id,
        schedule_created_by : req.body.schedule_created_by,
        schedule_updated_by : req.body.schedule_updated_by
    })
    .then(()=>{
        console.log('Data INSERTED successful');
        res.send('Data INSERTED successful');
    })
    .catch((err)=>{
        console.log('Error in INSERTING data : '+err);
        res.send('Error in INSERTING data : '+err);
    });
}

exports.updateSchedule = (req,res)=>{
    Schedule.update({
        schedule_day : req.body.schedule_day,
        schedule_start_time : req.body.schedule_start_time,
        schedule_end_time : req.body.schedule_end_time,
        schedule_teacher_id : req.body.schedule_teacher_id,
        schedule_subject_id : req.body.schedule_subject_id,
        schedule_ac_id : req.body.schedule_ac_id,
        schedule_created_by : req.body.schedule_created_by,
        schedule_updated_by : req.body.schedule_updated_by
    },{
        where : {schedule_id : req.body.schedule_id}
    })
    .then(()=>{
        console.log('Data UPDATED successful');
        res.send('Data UPDATED successful');
    })
    .catch((err)=>{
        console.log('Error in UPDATING data : '+err);
        res.send('Error in UPDATING data : '+err);
    });
}

exports.deleteSchedule = (req,res)=>{
    Schedule.destroy({
        where : {schedule_id : req.body.schedule_id}
    })
    .then(()=>{
        console.log('Data DELETED successful');
        res.send('Data DELETED successful');
    })
    .catch((err)=>{
        console.log('Error in DELETING data : '+err);
        res.send('Error in DELETING data : '+err);
    });
}