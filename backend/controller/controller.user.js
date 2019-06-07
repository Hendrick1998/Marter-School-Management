const db = require('../config/database');

const sequelize = db.sequelize;
const User = db.tbl_user;
const Student = db.tbl_student;
const Teacher = db.tbl_teacher;

exports.getAllUser = (req,res)=>{
    User.findAll()
        .then((users)=>{
            console.log(users);
            res.send(users);
        })
        .catch((err)=>{
            res.send("Error in Retrieving Data : "+err);
            console.log("Error in Retrieving Data : "+err);
        });
}

exports.getOneUser = (req,res)=>{
    
    const sql = 'SELECT * FROM TBL_USERS WHERE USER_ID = ?';
    sequelize.query(sql,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((user)=>{
        res.send(user);
        console.log(user);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });

}

exports.addUser = (req,res)=>{

    console.log(req.body.data);
    var data = JSON.parse(req.body.data);
    console.log("Data is=", data.username);
    
    User.create({
        user_name : data.username,
        user_phone : data.phone,
        user_pass : data.password,
        user_ur_id : data.role,
        user_created_by : data.created_by,
        user_updated_by : data.updated_by
    })
    .then((user)=>{
        res.send('Date inserted successfully');
        console.log('Data inserted successfully');
        console.log(user.user_id);
        console.log(data.rollno);
        Student.create({
            student_id : user.user_id,
            student_name : user.user_name,
            student_roll_no : data.rollno,
            student_year : data.year,
            student_address : data.address,
            student_date_of_birth : data.dateofbirth,
            student_phone : data.phone,
            student_parent_id : data.parent,
            student_imageURL : req.file.filename,
            student_created_by : data.created_by,
            student_updated_by : data.updated_by
        })
        .then(()=>{
            console.log('Student Data Created Successfully');
        })
    })
    .catch((err)=>{
        res.send('Error in data inserting',err);
        console.log('Error in data inserting',err);
    });

}

exports.updateUser = (req,res)=>{

    User.update({
        user_name : req.body.user_name,
        user_phone : req.body.user_phone,
        user_pass : req.body.user_pass,
        user_ur_id : req.body.user_ur_id,
        user_created_by : req.body.user_created_by,
        user_updated_by : req.body.user_updated_by
    },{
        where : {user_id : req.body.user_id}
    })
    .then(()=>{
        res.send('Data updated successfully');
        console.log('Data updated successfully');
    })
    .catch((err)=>{
        res.send('Error in data updating : '+err);
        console.log('Error in data updating : '+err);
    });
}

exports.deleteUser = (req,res)=>{

    User.destroy({
        where : {user_id : req.body.user_id}
    })
    .then(()=>{
        res.send('Data Deleted successfully');
        console.log('Data Deleted successfully');
    })
    .catch((err)=>{
        res.send('Error in deleting data : '+err);
        console.log('Error in deleting data : '+err);
    });

}

//Add Teachers And Users
exports.addUserTeacher = (req,res)=>{
    
    let data = JSON.parse(req.body.data);

    User.create({
        user_name : data.username,
        user_phone : data.phone,
        user_pass : data.password,
        user_ur_id : data.role,
        user_created_by : data.created_by,
        user_updated_by : data.updated_by
    })
        .then((user)=>{
            Teacher.create({
                teacher_id : user.user_id,
                teacher_name : user.user_name,
                teacher_subject_id : data.subject,
                teacher_address : data.address,
                teacher_phone : data.phone,
                teacher_date_of_birth : data.dateofbirth,
                teacher_imageURL : req.file.filename,
                teacher_created_by : data.created_by,
                teacher_updated_by : data.updated_by
            })
            .then(()=>{
                res.send('Data Inserted Successfully');
                console.log('Data Inserted Successfully');
            })
            .catch((err)=>{
                res.send('Error in Inserting Data'+err);
                console.log('Error in Inserting Data'+err);
            });
        })
        .catch((err)=>{
            res.send('Error in Inserting Data'+err);
            console.log('Error in Inserting Data'+err);
        });

}