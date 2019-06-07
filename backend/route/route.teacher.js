module.exports = (app)=>{
    
    const teacher = require('../controller/controller.teacher');

    //Get All Teacher
    app.get('/teachers/getAllTeacher',teacher.getAllTeacher);
    //Get one teacher
    app.get('/teachers/getOneTeacher/:id',teacher.getOneTeacher);

    app.post('/teachers/addTeacher',teacher.addTeacher);

    app.put('/teachers/updateTeacher',teacher.updateTeacher);

    app.delete('/teachers/deleteTeacher',teacher.deleteTeacher);

    app.get('/teachers/getTeacherImage/:imageName',teacher.getTeacherImage);

}