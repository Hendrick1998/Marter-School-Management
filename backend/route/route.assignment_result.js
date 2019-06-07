module.exports = (app)=>{

    const assignment_result = require('../controller/controller.assignment_result');

    app.get('/assignmentResults/getAllAssignmentResult',assignment_result.getAllAssignmentResult);

    app.get('/assignmentResults/getOneAssignmentResult/:id',assignment_result.getOneAssignmentResult);

    app.post('/assignmentResults/addAssignmentResult',assignment_result.addAssignmentResult);

    app.put('/assignmentResults/updateAssignmentResult',assignment_result.updateAssignmentResult);

    app.delete('/assignmentResults/deleteAssignmentResult',assignment_result.deleteAssignmentResult);

}