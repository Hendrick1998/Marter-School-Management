const db = require('../config/database');

const sequelize = db.sequelize;
const Class = db.tbl_class;

exports.getAllClass = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_CLASSES';

    sequelize.query(SQL,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((classes)=>{
        res.send(classes);
        console.log(classes);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.getOneClass = (req,res)=>{

    const SQL = 'SELECT * FROM TBL_CLASSES WHERE CLASS_ID = ?';

    sequelize.query(SQL,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((_class)=>{
        res.send(_class);
        console.log(_class);
    })
    .catch((err)=>{
        res.send('Error in Retrieving Data : '+err);
        console.log('Error in Retrieving Data : '+err);
    });
}

exports.addClass = (req,res)=>{
    Class.create({
        class_id : req.body.class_id,
        class_no : req.body.class_no,
        class_created_by : req.body.class_created_by,
        class_updated_by : req.body.class_updated_by
    })
    .then(()=>{
        console.log('Data inserted successfully');
        res.send('Data inserted successfully');
    })
    .catch((err)=>{
        console.log('Error in inserting data : '+err);
        res.send('Error in inserting data : '+err);
    });
}

exports.updateClass = (req,res)=>{
    Class.update({
        class_no : req.body.class_no,
        class_created_by : req.body.class_created_by,
        class_updated_by : req.body.class_updated_by
    },{
        where : {
            class_id : req.body.class_id
        }  
    })
    .then(()=>{
        console.log('Data updated successfully');
        res.send('Data updated successfully');
    })
    .catch((err)=>{
        console.log('Error in Updating data : '+err);
        res.send('Error in Updating data : '+err);
    });
}

exports.deleteClass = (req,res)=>{
    Class.destroy({
        where : {
            class_id : req.body.class_id
        }
    })
    .then(()=>{
        console.log('Data DELETED successfully');
        res.send('Data DELETED successfully');
    })
    .catch(err=>{
        console.log('Error in DELETING data : '+err);
        res.send('Error in DELETING data : '+err);
    });
}