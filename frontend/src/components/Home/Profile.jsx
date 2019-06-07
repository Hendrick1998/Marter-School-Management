import React, { Component } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import student from '../../images/student.png';
import teacher from '../../images/professor.png';
import parent from '../../images/family.png';
import admin from '../../images/adm.ico';
import Navbar from './CustomNavbar';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <Row >
            <Col xl={3} lg={3}>
              <Button href="/admin" target="_blank" variant="#fff">
                <Card style={{ width: '12rem', height: '15rem', marginBottom: '2rem' }} >
                  <div style={{ marginTop: '48px' }}>
                    <Card.Img variant="top" src={admin} class="figure-img img-fluid z-depth-1 " style={{ width: '40%' }} /></div>
                  <Card.Body>
                    <Card.Title className="text-center">ADMIN</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </Col>
            <Col xl={3} lg={3}>
              <Button href="" variant="#fff">
                <Card style={{ width: '12rem', height: '15rem', marginBottom: '2rem' }} >
                  <div style={{ marginTop: '48px' }}>
                    <Card.Img variant="top" src={parent} class="figure-img img-fluid z-depth-1 " style={{ width: '40%' }} /></div>
                  <Card.Body>
                    <Card.Title className="text-center">GUARDIANS</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </Col>

            <Col xl={3} lg={3}>
              <Button href="" variant="#fff">
                <Card style={{ width: '12rem', height: '15rem', marginBottom: '2rem' }} >
                  <div style={{ marginTop: '48px' }}>
                    <Card.Img variant="top" src={student} class="figure-img img-fluid z-depth-1 " style={{ width: '40%' }} /></div>
                  <Card.Body>
                    <Card.Title className="text-center">STUDENTS</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </Col>
            <Col xl={3} lg={3}>
              <Button href="" variant="#fff">
                <Card style={{ width: '12rem', height: '15rem', marginBottom: '2rem' }} >
                  <div style={{ marginTop: '48px' }}>
                    <Card.Img variant="top" src={teacher} class="figure-img img-fluid z-depth-1 " style={{ width: '40%' }} /></div>
                  <Card.Body>
                    <Card.Title className="text-center">TEACHERS</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}