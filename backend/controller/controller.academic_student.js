const db = require('../config/database');

const sequelize = db.sequelize;
const AcademicStudent = db.tbl_academic_student;

exports.getAllAcademicStudent = (req,res)=>{
    const SQL = "SELECT * FROM TBL_ACADEMIC_STUDENTS";
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((academic_students)=>{
        res.send(academic_students);
        console.log(academic_students);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneAcademicStudent = (req,res)=>{
    const SQL = "SELECT * FROM TBL_ACADEMIC_STUDENTS WHERE AS_ID = ?";
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((academic_student)=>{
        res.send(academic_student);
        console.log(academic_student);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addAcademicStudent = (req,res)=>{
    AcademicStudent.create({
        as_id : req.body.as_id,
        as_student_id : req.body.as_student_id,
        as_ac_id : req.body.as_ac_id,
        as_created_by : req.body.as_created_by,
        as_updated_by : req.body.as_updated_by
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

exports.updateAcademicStudent = (req,res)=>{
    AcademicStudent.update({
        as_student_id : req.body.as_student_id,
        as_ac_id : req.body.as_ac_id,
        as_created_by : req.body.as_created_by,
        as_updated_by : req.body.as_updated_by
    },{
        where : {as_id : req.body.as_id}
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

exports.deleteAcademicStudent = (req,res)=>{
    AcademicStudent.destroy({
        where : {as_id : req.body.as_id}
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