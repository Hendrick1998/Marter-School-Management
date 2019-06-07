const db = require('../config/database');

const sequelize = db.sequelize;
const AssignmentResult = db.tbl_assignment_result;

exports.getAllAssignmentResult = (req,res)=>{
    const SQL = "SELECT * FROM TBL_ASSIGNMENT_RESULTS";
    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((assignment_results)=>{
        console.log(assignment_results);
        res.send(assignment_results);
    })
    .catch(err=>{
        console.log('Error in RETRIEVING dat : '+err);
        res.send('Error in RETRIEVING dat : '+err);
    });
}

exports.getOneAssignmentResult = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ASSIGNMENT_RESULTS WHERE AR_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((assignment_result)=>{
        console.log(assignment_result);
        res.send(assignment_result);
    })
    .catch((err)=>{
        console.log('Error in RETRIEVING data : '+err);
        res.send('Error in RETRIEVING data : '+err);
    });
}

exports.addAssignmentResult = (req,res)=>{
    AssignmentResult.create({
        ar_id : req.body.ar_id,
        ar_assignment_id : req.body.ar_assignment_id,
        ar_student_id : req.body.ar_student_id,
        ar_assignment_marks : req.body.ar_assignment_marks,
        ar_created_by : req.body.ar_created_by,
        ar_updated_by : req.body.ar_updated_by
    })
    .then(()=>{
        console.log('Data INSERTED successfully');
        res.send('Data INSERTED successfully');
    })
    .catch((err)=>{
        console.log('Error in INSERTING data : '+err);
        res.send('Error in INSERTING data : '+err);
    });
}

exports.updateAssignmentResult = (req,res)=>{
    AssignmentResult.update({
        ar_assignment_id : req.body.ar_assignment_id,
        ar_student_id : req.body.ar_student_id,
        ar_assignment_marks : req.body.ar_assignment_marks,
        ar_created_by : req.body.ar_created_by,
        ar_updated_by : req.body.ar_updated_by
    },{
        where : {ar_id : req.body.ar_id}
    })
    .then(()=>{
        console.log('Data UPDATED successfully');
        res.send('Data UPDATED successfully');
    })
    .catch((err)=>{
        console.log('Error in UPDATING data : '+err);
        res.send('Error in UPDATING data : '+err);
    });
}

exports.deleteAssignmentResult = (req,res)=>{
    AssignmentResult.destroy({
        where : {ar_id : req.body.ar_id}
    })
    .then(()=>{
        console.log('Data DELETED successfully');
        res.send('Data DELETED successfully');
    })
    .catch((err)=>{
        console.log('Error in DELETING data : '+err);
        res.send('Error in DELETING data : '+err);
    });
}