const db = require('../config/database');

const sequelize = db.sequelize;
const ExamResult = db.tbl_exam_result;

exports.getAllExamResult = (req,res)=>{
    const SQL = "SELECT * FROM TBL_EXAM_RESULTS";
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((exam_results)=>{
        res.send(exam_results);
        console.log(exam_results);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneExamResult = (req,res)=>{
    const SQL = "SELECT * FROM TBL_EXAM_RESULTS WHERE ER_ID = ?";
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((exam_result)=>{
        res.send(exam_result);
        console.log(exam_result);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addExamResult = (req,res)=>{
    ExamResult.create({
        er_id : req.body.er_id,
        er_exam_id : req.body.er_exam_id,
        er_subject_id : req.body.er_subject_id,
        er_student_id : req.body.er_student_id,
        er_marks : req.body.er_marks,
        er_status : req.body.er_status,
        er_created_by : req.body.er_created_by,
        er_updated_by : req.body.er_updated_by
    })
    .then(()=>{
        res.send('Data INSERTED successfully');
        console.log('Data INSERTED successfully');
    })
    .catch((err)=>{
        res.send('Error in INSERTING data : '+err);
        console.log('Error in INSERTING data : '+err);
    });
}

exports.updateExamResult= (req,res)=>{
    ExamResult.update({
        er_exam_id : req.body.er_exam_id,
        er_subject_id : req.body.er_subject_id,
        er_student_id : req.body.er_student_id,
        er_marks : req.body.er_marks,
        er_status : req.body.er_status,
        er_created_by : req.body.er_created_by,
        er_updated_by : req.body.er_updated_by
    },{
        where : {er_id : req.body.er_id}
    })
    .then(()=>{
        res.send('Data UPDATED successfully');
        console.log('Data UPDATED successfully');
    })
    .catch((err)=>{
        res.send('Error in UPDATING data : '+err);
        console.log('Error in UPDATING data : '+err);
    });
}

exports.deleteExamResult = (req,res)=>{
    ExamResult.destroy({
        where : {er_id : req.body.er_id}
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