import React, { Component } from 'react';
import student from '../../../images/student.png';
import teacher from '../../../images/professor.png';
import parent from '../../../images/family.png';
import schedule from '../../../images/calendar.png';
import SideNav from '../../SideNavMenu';
import MyEventInput from './EventInput';
import MyEvent from './Event';
import '../../SideNavMenu.css';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Chart from './Chart';
import Calender from './Calender';
import Linegraph from './Linegraph';
export default class AdminDash extends Component {
    render() {
        return (
            <div>                
                <SideNav />        
                <Container className='pt-5' >
                    <div>
                        <Row>
                            <Col xl={3} lg={3}>
                                <Card style={{  height: '8rem', marginBottom: '1rem' }}>
                                    <Row>
                                        <Col style={{marginLeft:'8px'}}>
                                            <Card.Img src={student} style={{ width: '60px'}} className="mt-4" />
                                        </Col>
                                        <Col>
                                            <Card.Body class="mt-4">
                                                <Card.Title class="lead h1 text-center " style={{ color: 'deepskyblue' }}>18</Card.Title>
                                                <Card.Title class="lead text-center mr-1" style={{ color: '#000' }}>STUDENTS</Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3}>
                                <Card style={{  height: '8rem', marginBottom: '1rem' }}>
                                    <Row>
                                        <Col style={{marginLeft:'8px'}}>
                                            <Card.Img src={parent} style={{ width: '60px' }} className="mt-4" />
                                        </Col>
                                        <Col>
                                            <Card.Body class="mt-4">
                                                <Card.Title class="lead h1 text-center" style={{ color: 'deepskyblue' }}>18</Card.Title>
                                                <Card.Title class="lead text-center mr-1" style={{ color: '#000' }}>GUARDIANS</Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3}>
                                <Card style={{ height: '8rem', marginBottom: '1rem' }}>
                                    <Row>
                                        <Col style={{marginLeft:'8px'}}>
                                            <Card.Img src={teacher} style={{ width: '60px' }} className="mt-4" />
                                        </Col>
                                        <Col>
                                            <Card.Body class="mt-4">
                                                <Card.Title class="lead h1 text-center " style={{ color: 'deepskyblue' }}>18</Card.Title>
                                                <Card.Title class="lead text-center mr-1" style={{ color: '#000' }}>TEACHERS</Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xl={3} lg={3}>
                                <Card style={{ height: '8rem', marginBottom: '1rem' }}>
                                    <Row>
                                        <Col style={{marginLeft:'8px',marginTop:'8px'}}>
                                            <Card.Img src={schedule} style={{ width: '60px' }} className="mt-4" />
                                        </Col>
                                        <Col>
                                            <Card.Body class="mt-4">
                                                <Card.Title class="lead h1 text-center " style={{ color: 'deepskyblue' }}>18</Card.Title>
                                                <Card.Title class="lead text-center mr-1" style={{ color: '#000' }}>SCHEDULES</Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xl={8} lg={8} >
                                <Card style={{  marginBottom: '1rem',padding:'2rem'}}>
                                   <Linegraph/>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} > 
                            <Container style={{ marginBottom: '1rem'}}>
                            <MyEvent/> 
                            </Container>                        
                            </Col>
                        </Row>
                        <Row>
                           <Col xl={4} lg={4}>
                           <Card style={{ height: '380px', marginBottom: '1rem'}}>
                            <Chart/>
                           </Card>
                           </Col>
                           <Col xl={4} lg={4}>
                           <Card style={{ height: '380px', marginBottom: '1rem'}}>
                           <MyEventInput />
                           </Card>
                           </Col>   
                           <Col xl={4} lg={4}>
                           <Container style={{padding:'5rem'}} >
                           
                               <Calender/>
                           </Container>
                           </Col>               
                       </Row>
                    </div>
                </Container>
            </div>
           
        )
    }
}

