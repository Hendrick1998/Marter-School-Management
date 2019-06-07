const db = require('../config/database');

const sequelize = db.sequelize;
const Assignment = db.tbl_assignment;

exports.getAllAssignment = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ASSIGNMENTS';
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((assignments)=>{
        res.send(assignments);
        console.log(assignments);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneAssignment = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ASSIGNMENTS WHERE ASSIGNMENT_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((assignment)=>{
        res.send(assignment);
        console.log(assignment);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addAssignment = (req,res)=>{
    Assignment.create({
        assignment_id : req.body.assignment_id,
        assignment_name : req.body.assignment_name,
        assignment_subject_id : req.body.assignment_subject_id,
        assignment_class_id : req.body.assignment_class_id,
        assignment_teacher_id : req.body.assignment_teacher_id,
        assignment_desc : req.body.assignment_desc,
        assignment_start_date : req.body.assignment_start_date,
        assignment_end_date : req.body.assignment_end_date,
        assignment_type : req.body.assignment_type,
        assignment_created_by : req.body.assignment_created_by,
        assignment_updated_by : req.body.assignment_updated_by
    })
    .then(()=>{
        console.log('Data INSERTD successfully');
        res.send('Data INSERTD successfully');
    })
    .catch((err)=>{
        res.send('Error in INSERTING data : '+err);
        console.log('Error in INSERTING data : '+err);
    });
}

exports.updateAssignment = (req,res)=>{
    Assignment.update({
        assignment_name : req.body.assignment_name,
        assignment_subject_id : req.body.assignment_subject_id,
        assignment_class_id : req.body.assignment_class_id,
        assignment_teacher_id : req.body.assignment_teacher_id,
        assignment_desc : req.body.assignment_desc,
        assignment_start_date : req.body.assignment_start_date,
        assignment_end_date : req.body.assignment_end_date,
        assignment_type : req.body.assignment_type,
        assignment_created_by : req.body.assignment_created_by,
        assignment_updated_by : req.body.assignment_updated_by
    },{
        where : {
            assignment_id : req.body.assignment_id
        }
    })
    .then(()=>{
        console.log('Data UPDATED successfully');
        res.send('Data UPDATED successfully');
    })
    .catch((err)=>{
        res.send('Error in UPDATING data : '+err);
        console.log('Error in UPDATING data : '+err);
    });
}

exports.deleteAssignment = (req,res)=>{
    Assignment.destroy({
        where : {
            assignment_id : req.body.assignment_id
        }
    })
    .then(()=>{
        console.log('Data UPDATED successfully');
        res.send('Data UPDATED successfully');
    })
    .catch((err)=>{
        res.send('Error in UPDATING data : '+err);
        console.log('Error in UPDATING data : '+err);
    });
}