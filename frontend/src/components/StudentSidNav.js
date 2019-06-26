import React from 'react';
import {Nav} from 'react-bootstrap';
import logo from '../images/msm_logo.png';
import $ from 'jquery';

export default props => {
    $('.canvas-toggle').hide();

    function sideNav() {
   
      if ($(window).width() <= 1133) {
   
        $('.sidebar').hide();
      } else {
   
        $('.sidebar').show();
      }
   
    }
   
    $('.canvas-toggle').click(function() {
      
    });
   
   
    $(window).resize(function() {
   
      sideNav();
   
    });
    return (
        <Nav>
        <aside className='sidebar'>
        <img style={{marginBottom:'40px'}}
                        src={logo}
                        width="55"
                        height="36"
                        className="d-inline-block align-top mt-3"
                        alt="MSM Logo"
                        />
          <div className='main-nav'>
            <ul>
           
              <li>
                <a href="/admin">Dashboard</a>
                <i className="fas fa-chart-bar"></i>
                </li>
              <li>
                <a href='/adminstudentrecord'>Students</a>
                <i className="fas fa-user-graduate"></i>
              </li>
              <li>
                <a href='/adminteacherrecord'>Teachers</a>
                <i className="fas fa-chalkboard-teacher"></i>
              </li>
              <li>
                <a href='/adminparent'>Parents</a>
                <i className="fas fa-users"></i>
              </li>
              <li>
                <a>Schedules</a>
                <i className="far fa-calendar-alt"></i>
              </li>
              <li>
                <a href='/adminaddsubject'>Subjects</a>
                <i className="fab fa-cuttlefish"></i>
              </li>
              <li>
                <a>Classes</a>
                <i className="fas fa-chalkboard"></i>
              </li>
              <li>
                <a href='adminexam'>Exam</a>
                <i className="fas fa-sticky-note"></i>
              </li>
              <li>
                <a href='transportationvehicle'> Transportation</a>
                <i className="fas fa-bus-alt"></i>
              </li>
            </ul>
          </div>
        </aside>
      </Nav>
    );
};