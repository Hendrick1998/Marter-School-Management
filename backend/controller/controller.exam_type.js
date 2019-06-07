const db = require('../config/database');

const sequelize = db.sequelize;
const ExamType = db.tbl_exam_type;

exports.getAllExamType = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_EXAM_TYPES';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((examTypes)=>{
        res.send(examTypes);
        console.log(examTypes);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneExamType = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_EXAM_TYPES WHERE exam_type_id = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((examType)=>{
        res.send(examType);
        console.log(examType);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addExamType = (req,res)=>{
    ExamType.create({
        exam_type_id : req.body.exam_type_id,
        exam_type_name : req.body.exam_type_name,
        exam_type_desc : req.body.exam_type_desc,
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

exports.updateExamType = (req,res)=>{
    ExamType.update({
        exam_type_name : req.body.exam_type_name,
        exam_type_desc : req.body.exam_type_desc,
        exam_created_by : req.body.exam_created_by,
        exam_updated_by : req.body.exam_updated_by
    },{
        where : {exam_type_id : req.body.exam_type_id}
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

exports.deleteExamType = (req,res)=>{
    ExamType.destroy({
        where : {exam_type_id : req.body.exam_type_id}
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