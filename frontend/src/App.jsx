import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Home/Profile';
import Contact from './components/Home/Contact';
import About from './components/Home/About';
import Admin from './components/admin/AdminDash/Admin';
import Login from './components/login/login';
import StudentRecord from './components/admin/adminStudent/adminstudentrecord';
import StudentProfile from './components/admin/adminStudent/adminstudentprofile';
import AdminAddStudent from './components/admin/adminStudent/adminaddstudent';
import AdminTeacherRecord from './components/admin/AdminTeacher/adminteacherrecord';
import AdminAddTeacher from './components/admin/AdminTeacher/adminaddteacher';
import AdminAddSubject from './components/admin/AdminSubject/adminaddsubject';
import AdminExam from './components/admin/AdminExam/adminexam';
import AdminDriver from './components/admin/AdminTransport/admindriver';
import TransportationVehicle from './components/admin/AdminTransport/transportationvehicle'; 
import TeacherDashboard from './components/teacher/teacherdashboard';
import TeacherLeave from './components/teacher/teacherleave';
import AdminParent from './components/admin/AdminParents/adminparent';
import AdminClass from './components/admin/AdminClass/AdminClass';
import AdminChildClass from './components/admin/AdminClass/AdminClassChild';
import AdminParentProfile from './components/admin/AdminParents/AdminParentProfile';
import AdminParentChild from './components/admin/AdminParents/AdminParentsChild';
import Student from './components/Student/Student';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/adminstudentrecord' component={StudentRecord}/>
          <Route exact path='/adminstudentprofile/' component={StudentProfile}/>
          <Route exact path='/adminaddstudent' component={AdminAddStudent}/>
          <Route exact path='/adminteacherrecord' component={AdminTeacherRecord}/>
          <Route exact path='/adminaddteacher' component={AdminAddTeacher}/>
          <Route exact path='/adminaddsubject' component={AdminAddSubject}/>
          <Route exact path='/adminexam' component={AdminExam}/>
          <Route exact path='/admindriver' component={AdminDriver}/>
          <Route exact path='/transportationvehicle' component={TransportationVehicle}/>
          <Route exact path='/teacherdashboard' component={TeacherDashboard}/>
          <Route exact path='/teacherleave' component={TeacherLeave}/>
          <Route exact path='/adminparent' component={AdminParent}/>
          <Route exact path='/adminclass' component={AdminClass}/>
          <Route exact path='/adminchildclass' component={AdminChildClass}/>
          <Route exact path='/adminparentprofile' component={AdminParentProfile}/>
          <Route exact path='/adminparentchild' component={AdminParentChild}/>
          <Route exact path='/student' component={Student}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
