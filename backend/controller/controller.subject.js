const db = require('../config/database');

const sequelize = db.sequelize;
const Subject = db.tbl_subject;

exports.getAllSubject = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_SUBJECTS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((subjects)=>{
        res.send(subjects);
        console.log(subjects);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneSubject = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_SUBJECTS WHERE SUBJECT_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((subject)=>{
        res.send(subject);
        console.log(subject);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addSubject = (req,res)=>{
    Subject.create({
        subject_id : req.body.subject_id,
        subject_name : req.body.subject_name,
        subject_desc : req.body.subject_desc,
        subject_created_by : req.body.subject_created_by,
        subject_updated_by : req.body.subject_updated_by
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

exports.updateSubject = (req,res)=>{
    Subject.update({
        subject_name : req.body.subject_name,
        subject_desc : req.body.subject_desc,
        subject_created_by : req.body.subject_created_by,
        subject_updated_by : req.body.subject_updated_by
    },{
        where : {subject_id : req.body.subject_id,}
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

exports.deleteSubject = (req,res)=>{
    Subject.destroy({
        where : {subject_id : req.body.subject_id,}
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