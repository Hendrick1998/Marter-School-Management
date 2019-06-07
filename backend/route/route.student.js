module.exports = function(app){

    const student = require('../controller/controller.student');

    //Get All Student route
    app.get('/students/getAllStudent',student.getAllStudent);
    //Get On Student
    app.get('/students/getOneStudent/:id',student.getOneStudent);
    //Add Student
    app.post('/students/addStudent',student.addStudent);
    //Update Student
    app.put('/students/updateStudent',student.updateStudent);
    //Delete Student 
    app.delete('/students/deleteStudent/:id',student.deleteStudent);
    //Get Student Profile Image
    app.get('/students/getStudentImage/:imageName',student.getStudentImage);

}