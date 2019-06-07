module.exports = (app)=>{

    const user_role = require('../controller/controller.user_role');

    app.get('/userRoles/getAllUserRole',user_role.getAllUserRole);

    app.get('/userRoles/getOneUserRole/:id',user_role.getOneUerRole);

    app.post('/userRoles/addUserRole',user_role.addUserRole);

    app.put('/userRoles/updateUserRole',user_role.updateUserRole);

    app.delete('/userRoles/deleteUserRole',user_role.deleteUserRole);

}