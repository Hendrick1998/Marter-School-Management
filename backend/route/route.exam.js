module.exports = (app)=>{
    const exam = require('../controller/controller.exam');

    app.get('/exams/getAllExam',exam.getAllExam);

    app.get('/exams/getOneExam/:id',exam.getOneExam);

    app.post('/exams/addExam',exam.addExam);

    app.put('/exams/updateExam',exam.updateExam);

    app.delete('/exams/deleteExam',exam.deleteExam);
}