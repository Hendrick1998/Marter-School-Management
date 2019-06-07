module.exports = (app)=>{
    const academic_year = require('../controller/controller.academic_year');

    app.get('/academicYears/getAllAcademicYear',academic_year.getAllAcademicYear);

    app.get('/academicYears/getOneAcademicYear/:id',academic_year.getOneAcademicYear);

    app.post('/academicYears/addAcademicYear',academic_year.addAcademicYear);

    app.put('/academicYears/updateAcademicYear',academic_year.updateAcademicYear);

    app.delete('/academicYears/deleteAcademiceYear',academic_year.deleteAcademicYear);
}