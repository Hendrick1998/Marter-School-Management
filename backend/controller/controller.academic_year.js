const db = require('../config/database');

const sequelize = db.sequelize;
const AcademicYear = db.tbl_academic_year;

exports.getAllAcademicYear = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ACADEMIC_YEARS';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((academic_years)=>{
        console.log(academic_years);
        res.send(academic_years);
    })
    .catch((err)=>{
        console.log('Error in RETRIEVING data : '+err);
        res.send('Error in RETRIEVING data : '+err);
    });
}

exports.getOneAcademicYear = (req,res)=>{
    const SQL = 'SELECT * FROM TBL_ACADEMIC_YEARS WHERE ACADEMIC_YEAR_ID = ?';

    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((academic_year)=>{
        console.log(academic_year);
        res.send(academic_year);
    })
    .catch((err)=>{
        console.log('Error in RETRIEVING data : '+err);
        res.send('Error in RETRIEVING data : '+err);
    });
}

exports.addAcademicYear = (req,res)=>{
    AcademicYear.create({
        academic_year_id : req.body.academic_year_id,
        academic_year : req.body.academic_year,
        academic_created_by : req.body.academic_created_by,
        academic_updated_by : req.body.academic_updated_by
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

exports.updateAcademicYear = (req,res)=>{
    AcademicYear.update({
        academic_year : req.body.academic_year,
        academic_created_by : req.body.academic_created_by,
        academic_updated_by : req.body.academic_updated_by
    },{
        where : {academic_year_id : req.body.academic_year_id}
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

exports.deleteAcademicYear = (req,res)=>{
    AcademicYear.destroy({
        where : {academic_year_id : req.body.academic_year_id}
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