const db = require('../config/database');

const sequelize = db.sequelize;
const Attendance = db.tbl_attendance;

exports.getAllAttendance = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ATTENDANCES';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((attendances)=>{
        res.send(attendances);
        console.log(attendances);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneAttendance = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ATTENDANCES WHERE ATTENDANCE_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((attendance)=>{
        res.send(attendance);
        console.log(attendance);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addAttendance = (req,res)=>{
    Attendance.create({
        attendance_id : req.body.attendance_id,
        attendance_date : req.body.attendance_date,
        attendance_subject_id : req.body.attendance_subject_id,
        attendance_status : req.body.attendance_status,
        attendance_schedule_id : req.body.attendance_schedule_id,
        attendance_created_by : req.body.attendance_created_by,
        attendance_updated_by : req.body.attendance_updated_by
    })
    .then(()=>{
        console.log('Data INSERTED successful');
        res.send('Data INSERTED successful');
    })
    .catch((err)=>{
        res.send('Error in INSERTING data : '+err);
        console.log('Error in INSERTING data : '+err);
    });
}

exports.updateAttendance = (req,res)=>{
    Attendance.update({
        
        attendance_date : req.body.attendance_date,
        attendance_subject_id : req.body.attendance_subject_id,
        attendance_status : req.body.attendance_status,
        attendance_schedule_id : req.body.attendance_schedule_id,
        attendance_created_by : req.body.attendance_created_by,
        attendance_updated_by : req.body.attendance_updated_by
    },{
        where : {attendance_id : req.body.attendance_id,}
    })
    .then(()=>{
        console.log('Data UPDATED successful');
        res.send('Data UPDATED successful');
    })
    .catch((err)=>{
        res.send('Error in UPDATING data : '+err);
        console.log('Error in UPDATING data : '+err);
    });
}

exports.deleteAttendance = (req,res)=>{
    Attendance.destroy({
        where : {attendance_id : req.body.attendance_id,}
    })
    .then(()=>{
        console.log('Data DELETED successful');
        res.send('Data DELETED successful');
    })
    .catch((err)=>{
        res.send('Error in DELETING data : '+err);
        console.log('Error in DELETING data : '+err);
    });
}