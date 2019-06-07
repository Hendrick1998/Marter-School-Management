module.exports = (app)=>{
    const academic_class = require('../controller/controller.academic_class');

    app.get('/academicClasses/getAllAcademicClass',academic_class.getAllAcademicClass);

    app.get('/academicClasses/getOneAcademicClass/:id',academic_class.getOneAcademicClass);

    app.post('/academicClasses/addAcademicClass',academic_class.addAcademicClass);

    app.put('/academicClasses/updateAcademicClass',academic_class.updateAcademicClass);

    app.delete('/academicClasses/deleteAcademicClass',academic_class.deleteAcademicClass);
}