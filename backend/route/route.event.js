module.exports = (app)=>{
    const event = require('../controller/controller.event');

    app.get('/events/getAllEvent',event.getAllEvents);

    app.get('/events/getOneEvent/:id',event.getOneEvents);

    app.post('/events/addEvent',event.addEvent);

    app.put('/events/updateEvent',event.updateEvent);

    app.delete('/events/deleteEvent',event.deleteEvent);
}