module.exports = (app)=>{

    const attendance = require('../controller/controller.attendance');

    app.get('/attendances/getAllAttendance',attendance.getAllAttendance);

    app.get('/attendances/getOneAttendance/:id',attendance.getOneAttendance);

    app.post('/attendances/addAttendance',attendance.addAttendance);

    app.put('/attendances/updateAttendance',attendance.updateAttendance);

    app.delete('/attendances/deleteAttendance',attendance.deleteAttendance);

}