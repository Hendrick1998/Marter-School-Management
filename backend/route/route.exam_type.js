module.exports = (app)=>{
    const exam_types = require('../controller/controller.exam_type');

    app.get('/examTypes/getAllExamType',exam_types.getAllExamType);

    app.get('/examTypes/getOneExamType/:id',exam_types.getOneExamType);

    app.post('/examTypes/addExamType',exam_types.addExamType);

    app.put('/examTypes/updateExamType',exam_types.updateExamType);

    app.delete('/examTypes/deleteExamType',exam_types.deleteExamType);
}