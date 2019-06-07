module.exports = (app)=>{

    const schedule = require('../controller/controller.schedule');

    app.get('/schedules/getAllSchedule',schedule.getAllSchedule);

    app.get('/schedules/getOneSchedule/:id',schedule.getOneSchedule);

    app.post('/schedules/addSchedule',schedule.addSchedule);

    app.put('/schedules/updateSchedule',schedule.updateSchedule);

    app.delete('/schedules/deleteSchedule',schedule.deleteSchedule);
}