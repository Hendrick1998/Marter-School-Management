module.exports = (app)=>{

    const _class = require('../controller/controller_class');

    app.get('/classes/getAllClass',_class.getAllClass);

    app.get('/classes/getOneClass/:id',_class.getOneClass);

    app.post('/classes/addClass',_class.addClass);

    app.put('/classes/updateClass',_class.updateClass);

    app.delete('/classes/deleteClass',_class.deleteClass);

}