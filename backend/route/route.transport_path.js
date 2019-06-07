module.exports = (app)=>{
    
    const transport_path = require('../controller/controller.transport_path');

    app.get('/transportPaths/getAllTransportPath',transport_path.getAllTransportPath);

    app.get('/transportPaths/getOneTransportPath/:id',transport_path.getOneTransportPath);

    app.post('/transportPaths/addTransportPath',transport_path.addTransportPath);

    app.put('/transportPaths/updateTransportPath',transport_path.updateTransportPath);

    app.delete('/transportPaths/deleteTransportPath',transport_path.deleteTransportPath);

}