const Sequelize = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('msm_db','msm','password',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Create Table by means of MODEls
db.tbl_user = require('../model/model.tbl_user')(sequelize,Sequelize);
db.tbl_user_role = require('../model/model.tbl_user_role')(sequelize,Sequelize);
db.tbl_controller = require('../model/model.tbl_controller')(sequelize,Sequelize);
db.tbl_permission = require('../model/model.tbl_permission')(sequelize,Sequelize);
db.tbl_student = require('../model/model.tbl_student')(sequelize,Sequelize);
db.tbl_parent = require('../model/model.tbl_parent')(sequelize,Sequelize);
db.tbl_teacher = require('../model/model.tbl_teacher')(sequelize,Sequelize);
db.tbl_class = require('../model/model.tbl_class')(sequelize,Sequelize);
db.tbl_academic_year = require('../model/model.tbl_academic_year')(sequelize,Sequelize);
db.tbl_academic_class = require('../model/model.tbl_academic_class')(sequelize,Sequelize);
db.tbl_academic_student = require('../model/model.tbl_academic_student')(sequelize,Sequelize);
db.tbl_assignment = require('../model/model.tbl_assignment')(sequelize,Sequelize);
db.tbl_assignment_result = require('../model/model.tbl_assignment_result')(sequelize,Sequelize);
db.tbl_schedule = require('../model/model.tbl_schedule')(sequelize,Sequelize);
db.tbl_attendance = require('../model/model.tbl_attendance')(sequelize,Sequelize);
db.tbl_exam = require('../model/model.tbl_exam')(sequelize,Sequelize);
db.tbl_exam_result = require('../model/model.tbl_exam_result')(sequelize,Sequelize);
db.tbl_exam_type = require('../model/model.tbl_exam_type')(sequelize,Sequelize);
db.tbl_driver = require('../model/model.tbl_driver')(sequelize,Sequelize);
db.tbl_event = require('../model/model.tbl_event')(sequelize,Sequelize);
db.tbl_subject = require('../model/model.tbl_subject')(sequelize,Sequelize);
db.tbl_transport = require('../model/model.tbl_transport')(sequelize,Sequelize);
db.tbl_transport_path = require('../model/model.tbl_transport_path')(sequelize,Sequelize);

module.exports = db;