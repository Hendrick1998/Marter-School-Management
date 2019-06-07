module.exports = (app)=>{

    const multer = require('multer');
    const path = require('../config/path');
    
    const storage = multer.diskStorage({
        destination : function(req, file, cb){
            console.log(path.path)
            cb(null,path.path);
        },
        filename : function(req,file,cb){
            console.log(file)
            cb(null,new Date().getTime()+'-'+file.originalname);
        }
    });
    const fileFilter = (req,file,cb)=>{
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
            cb(null,true);
        }else{
            cb(null,false);
        }
    }
    const upload = multer({
        storage : storage,
        limits : {
            fileSize : 1024*1024*5
        },
       fileFilter : fileFilter
    });

    const user = require('../controller/controller.user');

    app.get('/users/getAllUser',user.getAllUser);

    app.get('/users/getOneUser/:id',user.getOneUser);

    app.post('/users/addUser/student',upload.single('uploadfile'),user.addUser);

    app.post('/users/addUser/teacher',upload.single('uploadTeacherFile'),user.addUserTeacher);

    app.put('/users/updateUser',user.updateUser);

    app.delete('/users/deleteUser',user.deleteUser);

}