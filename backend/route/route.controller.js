module.exports = (app)=>{

    const controller = require('../controller/controller.controller');

    app.get('/controllers/getAllController',controller.getAllController);

    app.get('/controllers/getOneController/:id',controller.getOneController);

    app.post('/controllers/addController',controller.addController);

    app.put('/controllers/updateController',controller.updateController);

    app.delete('/controllers/deleteController',controller.deleteController);

}