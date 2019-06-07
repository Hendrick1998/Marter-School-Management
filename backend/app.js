const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const path = require ("./config/path")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const PORT = 8000;

const uploadDir = require('path').join(__dirname+"/upload")

app.use("/static",express.static(uploadDir))


db.sequelize.sync({force : false})
    .then(()=>{
        console.log(path.path)
        console.log('Database connection succeed');
    })
    .catch((err)=>{
        console.log('Database Connection Fail : ',err);
    });

require('./route/route.student')(app);
require('./route/route.parent')(app);
require('./route/route.teacher')(app);
require('./route/route.user')(app);
require('./route/route.user_role')(app);
require('./route/route.controller')(app);
require('./route/route.permission')(app);
require('./route/route_class')(app);
require('./route/route.academic_year')(app);
require('./route/route.academic_class')(app);
require('./route/route.academic_student')(app);
require('./route/route.assignment')(app);
require('./route/route.assignment_result')(app);
require('./route/route.schdeule')(app);
require('./route/route.attendance')(app);
require('./route/route.exam')(app);
require('./route/route.exam_result')(app);
require('./route/route.exam_type')(app);
require('./route/route.driver')(app);
require('./route/route.event')(app);
require('./route/route.subject')(app);
require('./route/route.transport')(app);
require('./route/route.transport_path')(app);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
});