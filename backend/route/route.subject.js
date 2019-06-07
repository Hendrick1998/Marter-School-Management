module.exports = (app)=>{
    const subjects = require('../controller/controller.subject');

    app.get('/subjects/getAllSubject',subjects.getAllSubject);

    app.get('/subjects/getOneSubject/:id',subjects.getOneSubject);

    app.post('/subjects/addSubject',subjects.addSubject);

    app.put('/subjects/updateSubject',subjects.updateSubject);

    app.delete('/subjects/deleteSubject',subjects.deleteSubject);
}