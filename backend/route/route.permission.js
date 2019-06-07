module.exports = (app)=>{
    const permission = require('../controller/controller.permission');

    app.get('/permissions/getAllPermission',permission.getAllPermission);

    app.get('/permissions/getOnePermission/:id',permission.getOnePermission);

    app.post('/permissions/addPermission',permission.addPermission);

    app.put('/permissions/updatePermission',permission.updatePermission);

    app.delete('/permissions/deletePermission',permission.deletePermission);
}