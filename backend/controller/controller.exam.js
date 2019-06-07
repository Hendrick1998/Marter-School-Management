const db = require('../config/database');

const sequelize = db.sequelize;
const Exam = db.tbl_exam;

exports.getAllExam = (req,res)=>{
    const SQL = 'SELECT * FROM tbl_exams';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((exams)=>{
        res.send(exams);
        console.log(exams);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneExam = (req,res)=>{
    const SQL = 'SELECT * FROM tbl_exams WHERE exam_id = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((exam)=>{
        res.send(exam);
        console.log(exam);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addExam = (req,res)=>{
    Exam.create({
        exam_id : req.body.exam_id,
        exam_name : req.body.exam_name,
        exam_desc : req.body.exam_desc,
        exam_type_id : req.body.exam_type_id,
        exam_start_date : req.body.exam_start_date,
        exam_end_date : req.body.exam_end_date,
        exam_created_by : req.body.exam_created_by,
        exam_updated_by : req.body.exam_updated_by
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

exports.updateExam = (req,res)=>{
    Exam.update({
        exam_name : req.body.exam_name,
        exam_desc : req.body.exam_desc,
        exam_type_id : req.body.exam_type_id,
        exam_start_date : req.body.exam_start_date,
        exam_end_date : req.body.exam_end_date,
        exam_created_by : req.body.exam_created_by,
        exam_updated_by : req.body.exam_updated_by
    },{
        where : {exam_id : req.body.exam_id}
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

exports.deleteExam = (req,res)=>{
    Exam.destroy({
        where : {exam_id : req.body.exam_id}
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