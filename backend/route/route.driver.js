module.exports = (app)=>{
    const driver = require('../controller/controller.driver');

    app.get('/drivers/getAllDriver',driver.getAllDriver);

    app.get('/drivers/getOneDriver/:id',driver.getOneDriver);

    app.post('/drivers/addDriver',driver.addDriver);

    app.put('/drivers/updateDriver',driver.updateDriver);

    app.delete('/drivers/deleteDriver',driver.deleteDriver);
}