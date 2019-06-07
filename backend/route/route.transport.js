module.exports = (app)=>{
    
    const transport = require('../controller/controller.transport');

    //Get All Teacher
    app.get('/transports/getAllTransport',transport.getAllTransport);
    //Get one teacher
    app.get('/transports/getOneTransport/:id',transport.getOneTransport);

    app.post('/transports/addTransport',transport.addTransport);

    app.put('/transports/updateTransport',transport.updateTransport);

    app.delete('/transports/deleteTransport',transport.deleteTransport);

}