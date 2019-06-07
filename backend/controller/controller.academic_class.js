const db = require('../config/database');

const sequelize = db.sequelize;
const AcademicClass = db.tbl_academic_class;

exports.getAllAcademicClass = (req,res)=>{

    const SQL = 'SELECT * FROM Tbl_ACADEMIC_CLASSES';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((acadmic_classes)=>{
        res.send(acadmic_classes);
        console.log(acadmic_classes);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.getOneAcademicClass = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ACADEMIC_CLASSES WHERE AC_ID = ?';
    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((academic_class)=>{
        res.send(academic_class);
        console.log(academic_class);
    })
    .catch((err)=>{
        res.send('Error in RETRIEVING data : '+err);
        console.log('Error in RETRIEVING data : '+err);
    });
}

exports.addAcademicClass = (req,res)=>{
    AcademicClass.create({
        ac_id : req.body.ac_id,
        ac_academic_year_id : req.body.ac_academic_year_id,
        ac_class_id : req.body.ac_class_id,
        ac_teacher_id : req.body.ac_teacher_id,
        ac_year : req.body.ac_year,
        ac_section : req.body.ac_section,
        ac_created_by : req.body.ac_created_by,
        ac_updated_by : req.body.ac_updated_by
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

exports.updateAcademicClass = (req,res)=>{
    AcademicClass.update({
        ac_academic_year_id : req.body.ac_academic_year_id,
        ac_class_id : req.body.ac_class_id,
        ac_teacher_id : req.body.ac_teacher_id,
        ac_year : req.body.ac_year,
        ac_section : req.body.ac_section,
        ac_created_by : req.body.ac_created_by,
        ac_updated_by : req.body.ac_updated_by
    },{
        where : {ac_id : req.body.ac_id}
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

exports.deleteAcademicClass = (req,res)=>{
    AcademicClass.destroy({
        where : {ac_id : req.body.ac_id}
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