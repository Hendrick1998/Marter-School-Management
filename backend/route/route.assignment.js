module.exports = (app)=>{

    const assignment = require('../controller/controller.assignment');

    app.get('/assignments/getAllAssignment',assignment.getAllAssignment);

    app.get('/assignments/getOneAssignment/:id',assignment.getOneAssignment);

    app.post('/assignments/addAssignment',assignment.addAssignment);

    app.put('/assignments/updateAssignment',assignment.updateAssignment);

    app.delete('/assignments/deleteAssignment',assignment.deleteAssignment);
}