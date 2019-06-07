module.exports = function(app){

    const parent = require('../controller/controller.parent');

    //Get All Parents
    app.get('/parents/getAllParent',parent.getAllParent);
    //Get one Parent by id
    app.get('/parents/getOneParent/:id',parent.getOneParent);
    //Add Parent
    app.post('/parents/addParent',parent.addParent);
    //Update Parent
    app.put('/parents/updateParent',parent.updateParent);
    //Delete Parent
    app.delete('/parents/deleteParent',parent.deleteParent);

}