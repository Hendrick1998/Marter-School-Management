module.exports = (app)=>{
    const exam_result = require('../controller/controller.exam_result');

    app.get('/examResults/getAllExamResult',exam_result.getAllExamResult);

    app.get('/examResults/getOneExamResult/:id',exam_result.getOneExamResult);

    app.post('/examResults/addExamResult',exam_result.addExamResult);

    app.put('/examResults/updateExamResult',exam_result.updateExamResult);

    app.delete('/examResults/deleteExamResult',exam_result.deleteExamResult);
}