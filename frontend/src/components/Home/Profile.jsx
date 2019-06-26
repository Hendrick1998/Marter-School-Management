import React, { Component } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import student from '../../images/student.png';
import teacher from '../../images/professor.png';
import parent from '../../images/family.png';
import admin from '../../images/adm.png';
import Navbar from './CustomNavbar';
import '../Profile.css';
import $ from 'jquery';

export default class Profile extends Component {

  componentDidMount() {
    let navbarHeight = $('.main-nav').css('height').split('px')[0];
    let screenHeight = window.screen.height;
    let customNumber = 100;
    let containerHeight = screenHeight - navbarHeight - customNumber;
    containerHeight = containerHeight + "px";
    $('.profile-container').css('min-height', containerHeight);
  }

  render() {
    return (
      <div>
        <Navbar activeElement = "profile"/>
        <Container className="mt-3 profile-container">
          <Row>

            <div className="col-xs-3 col-lg-3 mb-4">
              <div className = "profile-card">
                <a href = "/admin">
                  <div className="profile-card-image">
                    <img src={admin} alt="Card Icon"/>
                  </div>

                  <div className="profile-card-body">
                    ADMIN
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xs-3 col-lg-3 mb-4">
              <div className = "profile-card">
                <a href = "">
                  <div className="profile-card-image">
                    <img src={parent} alt="Card Icon"/>
                  </div>

                  <div className="profile-card-body">
                    GUARDIANS
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xs-3 col-lg-3 mb-4">
              <div className = "profile-card">
                <a href = "/student">
                  <div className="profile-card-image">
                    <img src={student} alt="Card Icon"/>
                  </div>

                  <div className="profile-card-body">
                    STUDENTS
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xs-3 col-lg-3 mb-4">
              <div className = "profile-card">
                <a href = "/teacherdashboard">
                  <div className="profile-card-image">
                    <img src={teacher} alt="Card Icon"/>
                  </div>

                  <div className="profile-card-body">
                    TEACHERS
                  </div>
                </a>
              </div>
            </div>

            
          </Row>
        </Container>

      </div>
    )
  }
}