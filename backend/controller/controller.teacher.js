const db = require('../config/database');

const sequelize = db.sequelize;
const Teacher = db.tbl_teacher;

exports.getAllTeacher = (req,res)=>{

    const sql = 'SELECT tbl_teachers.teacher_name,tbl_teachers.teacher_address,tbl_teachers.teacher_phone,\
                 tbl_teachers.teacher_date_of_birth,tbl_teachers.teacher_imageURL,tbl_subjects.subject_name,\
                 tbl_teachers.teacher_created_by,tbl_teachers.teacher_updated_by,tbl_teachers.createdAt,tbl_teachers.updatedAt\
                 FROM TBL_TEACHERS,tbl_subjects\
                 where tbl_teachers.teacher_subject_id = tbl_subjects.subject_id';
    sequelize.query(sql,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((teachers)=>{
        res.send(teachers);
        console.log(teachers);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.getOneTeacher = (req,res)=>{

    const sql = 'SELECT * FROM TBL_TEACHERS WHERE TEACHER_ID = ?';
    sequelize.query(sql,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((teacher)=>{
        res.send(teacher);
        console.log(teacher);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.addTeacher = (req,res)=>{

    Teacher.create({
        teacher_id : req.body.teacher_id,
        teacher_name : req.body.teacher_name,
        teacher_subject_id : req.body.teacher_subject_id,
        teacher_address : req.body.teacher_address,
        teacher_phone : req.body.teacher_phone,
        teacher_date_of_birth : req.body.teacher_date_of_birth,
        teacher_imageURL : req.body.teacher_imageURL,
        teacher_created_by : req.body.teacher_created_by,
        teacher_updated_by : req.body.teacher_updated_by
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

exports.updateTeacher = (req,res)=>{
    Teacher.update({
        teacher_name : req.body.teacher_name,
        teacher_subject_id : req.body.teacher_subject_id,
        teacher_address : req.body.teacher_address,
        teacher_phone : req.body.teacher_phone,
        teacher_date_of_birth : req.body.teacher_date_of_birth,
        teacher_imageURL : req.body.teacher_imageURL,
        teacher_created_by : req.body.teacher_created_by,
        teacher_updated_by : req.body.teacher_updated_by
    },
    {
        where : {teacher_id : req.body.teacher_id}
    }
    )
    .then(()=>{
        res.send('Update Data successfully');
        console.log('Update Data successfully');
    })
    .catch((err)=>{
        res.send('Error in updating data : '+err);
        console.log('Error in updating data : '+err);
    });
}

exports.deleteTeacher = (req,res)=>{
    Teacher.destroy({
        where : {teacher_id : req.body.teacher_id}
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