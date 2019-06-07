const db = require('../config/database');

const sequelize = db.sequelize;
const Parent = db.tbl_parent;

//Get All Parent
exports.getAllParent = (req,res)=>{
    const sql = 'SELECT * FROM TBL_PARENTS';
    sequelize.query(sql,{
        type : sequelize.QueryTypes.SELECT
    })
    .then((parents)=>{
        res.send(parents);
        console.log(parents);
    })
    .catch((err)=>{
        res.send('Error in Retrieving data : ',err);
        console.log('Error in Retrieving data : ',err);
    });
}

//Get One Parent by id
exports.getOneParent = (req,res)=>{
    const sql = 'SELECT * FROM TBL_PARENTS WHERE PARENT_ID = ?';
    sequelize.query(sql,{
        replacements : [req.params.id],
        type : sequelize.QueryTypes.SELECT
    })
    .then((parent)=>{
        res.send(parent);
        console.log(parent)
    })
    .catch((err)=>{
        res.send('Error in Retrieving data : ',err);
        console.log('Error in Retrieving data : ',err);
    });
}

//Add Parent
exports.addParent = (req,res)=>{
    Parent.create({
        parent_id : req.body.parent_id,
        parent_name : req.body.parent_name,
        parent_address : req.body.parent_address,
        parent_phone : req.body.parent_phone,
        parent_date_of_birth : req.body.parent_date_of_birth,
        parent_imageURL : req.body.parent_imageURL,
        parent_created_by : req.body.parent_created_by,
        parent_updated_by : req.body.parent_updated_by
    })
    .then(()=>{
        res.send('Parent data inserted successfully');
        console.log('Parent data inserted successfully');
    })
    .catch((err)=>{
        res.send('Error in inserting data : '+err);
        console.log('Error in inserting data : '+err);
    });
}

//Update Parent
exports.updateParent = (req,res)=>{
    Parent.update({
        parent_name : req.body.parent_name,
        parent_address : req.body.parent_address,
        parent_phone : req.body.parent_phone,
        parent_date_of_birth : req.body.parent_date_of_birth,
        parent_imageURL : req.body.parent_imageURL,
        parent_created_by : req.body.parent_created_by,
        parent_updated_by : req.body.parent_updated_by
    },
    {
        where : {
            parent_id : req.body.parent_id
        }
    })
    .then(()=>{
        res.send('Updated Data Successfully');
        console.log('Updated Data Successfully');
    })
    .catch((err)=>{
        res.send('Error in Data Updating : '+err);
        console.log('Error in Data Updating : '+err);
    });
}

//Delete Parent
exports.deleteParent = (req,res)=>{
    Parent.destroy({
        where : {parent_name : req.body.parent_name}
    })
    .then(()=>{
        res.send('Delete Data Successfully');
        console.log('Delete Data Successfully');
    })
    .catch((err=>{
        res.send('Error in Deleting Data : '+err);
        console.log('Error in Deleting Data : '+err);
    }));
}