const db = require('../config/database');
const path = require('../config/path');
const fs = require('fs');

const sequelize = db.sequelize;
const Student = db.tbl_student;
const User = db.tbl_user;

// Get All Student
exports.getAllStudent = (req,res)=>{

    const sql = 'SELECT * FROM TBL_STUDENTS';

    sequelize.query(sql,{type : sequelize.QueryTypes.SELECT})
        .then((students)=>{
            res.send(students);
            console.log(students);
        })
        .catch((err)=>{
            res.send("ERROR : "+err);
            console.log('ERROR : '+err);
        });
}

//Get one student by id
exports.getOneStudent = (req,res)=>{
    const sql = 'SELECT * FROM TBL_STUDENTS WHERE student_id = ?';
    sequelize.query(sql,
        {replacements : [req.params.id],type : sequelize.QueryTypes.SELECT})
        .then((student)=>{
            res.send(student);
            console.log(student);
        }).catch((err)=>{
            res.send('Error : '+err);
            console.log('Error : '+err);
        });
}

//Add Student
exports.addStudent = (req,res)=>{
    Student.create({
        student_id : req.body.student_id,
        student_name : req.body.student_name,
        student_roll_no : req.body.student_roll_no,
        student_year : req.body.student_year,
        student_address : req.body.student_address,
        student_date_of_birth : req.body.student_date_of_birth,
        student_phone : req.body.student_phone,
        student_parent_id : req.body.student_parent_id,
        student_imageURL : req.body.student_imageURL,
        student_created_by : req.body.student_created_by,
        student_updated_by : req.body.student_updated_by
    })
    .then((data)=>{
        console.log('Inserted Student Data : '+data.dataValues);
        res.send('Student data inserted successfully');
    })
    .catch((err)=>{
        console.log('Error in inserting student data : '+err);
        res.send('Error in inserting student data : '+err);
    });
}

//Update Student
exports.updateStudent = (req,res)=>{

    Student.update({
        student_name : req.body.student_name,
        student_roll_no : req.body.student_roll_no,
        student_year : req.body.student_year,
        student_address : req.body.student_address,
        student_date_of_birth : req.body.student_date_of_birth,
        student_phone : req.body.student_phone,
        student_parent_id : req.body.student_parent_id,
        student_imageURL : req.body.student_imageURL,
        student_created_by : req.body.student_created_by,
        student_updated_by : req.body.student_updated_by
    },{
        where : {
            student_id : req.body.student_id
        }
    })
    .then(()=>{
        console.log('Updated Student data successfully');
        console.log(req.body);
        User.update({
            user_name : req.body.student_name,
            user_phone : req.body.student_phone,
            user_pass : req.body.user_pass,
            user_ur_id : req.body.user_ur_id,
            user_created_by : req.body.user_created_by,
            user_updated_by : req.body.user_updated_by
        },{
            where : {user_id : req.body.student_id}
        })
        .then(()=>{
            res.send('Data updated successfully');
            console.log('Data updated successfully');
        })
        .catch((err)=>{
            res.send('Error in data updating : '+err);
            console.log('Error in data updating : '+err);
        });
    })
    .catch((err)=>{
        res.send('Error in updating student data : '+err);
        console.log('Error in updating student data : '+err);
    });
}

//Delete Student
exports.deleteStudent = (req,res)=>{
    console.log('REQUEST : ',req.params.id);
    Student.destroy({
        where : {
            student_id : req.params.id
        }
    })
    .then(()=>{
        console.log('Delete Student DONE');
        User.destroy({
            where : {user_id : req.params.id}
        })
        .then(()=>{
            res.send('Data Deleted successfully');
            console.log('Data Deleted successfully');
        })
        .catch((err)=>{
            res.send('Error in deleting data : '+err);
            console.log('Error in deleting data : '+err);
        });
    })
    .catch((err)=>{
        res.send('Error in Deleting Student : '+err);
        console.log('Error in Deleting Student : '+err);
    });
}

//Get Student Profile Image
exports.getStudentImage = (req,res)=>{
    const pic = req.params.imageName;
    console.log(pic);
    fs.readFile(path.path+pic,(err,content)=>{
        if(err){
            res.send('No Such Image');
        }else{
            //res.writeHead(200,{'Content-Type':'multipart/form-data'})
            res.send(content);
        }
    });
}