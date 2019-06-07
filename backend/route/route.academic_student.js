module.exports = (app)=>{
    const academic_student = require('../controller/controller.academic_student');
    
    app.get('/academicStudents/getAllAcademicStudent',academic_student.getAllAcademicStudent);

    app.get('/academicStudents/getOneAcademicStudent/:id',academic_student.getOneAcademicStudent);

    app.post('/academicStudents/addAcademicStudent',academic_student.addAcademicStudent);

    app.put('/academicStudents/updateAcademicStudent',academic_student.updateAcademicStudent);

    app.delete('/academicStudents/deleteAcademicStudent',academic_student.deleteAcademicStudent);
}