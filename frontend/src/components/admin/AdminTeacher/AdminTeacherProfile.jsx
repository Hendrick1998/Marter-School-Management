import React , {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import data from './teacherSampleData';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SideNavbar from '../../SideNavMenu';


class AdminTeacherProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
          data : [],
          teacher : this.props.location.state,
          subject : []
        }
      }
    componentDidMount(){
        $(function(){
          $('.datepicker').datepicker();
        });
        this.setState({
          data : data
        })
        console.log(this.props.location.state);

        //Fetching Subject Data
        const subject_url = 'http://localhost:8000/subjects/getAllSubject';
        fetch(subject_url)
          .then((response)=>{
            return response.json();
          })
          .then((data)=>{
            this.setState({
              subject : data
            },()=>{
              console.log(this.state.subject);
            })
          });
      }

    handleOnChange=(event)=>{
      const {name, value} = event.target;
      const teacher_obj = this.state.teacher;
      teacher_obj[name] = value;
      this.setState({
        teacher : teacher_obj
      },()=>{
        console.log(this.state.teacher);
      })
      console.log(name);
      console.log(value);
    }

    handleOnSubmit=(event)=>{
      event.preventDefault();
      let teacher_obj = this.state.teacher;
      let arr_subject = this.state.subject;
      for(let i=0;i<arr_subject.length;i++){
        if(arr_subject[i].subject_name === teacher_obj.subject_name){
          teacher_obj.subject_name = arr_subject[i].subject_id;
        }
      }
      console.log(teacher_obj);
      const teacher_update_url = 'http://localhost:8000/teachers/updateTeacher';
      fetch(teacher_update_url,{
        method : 'PUT',
        body : JSON.stringify(teacher_obj),
        headers : {
          'Content-Type':'application/json'
        }
      }).then(res=>{
        if(res.ok) return res.json()
      }).then(data=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log('Error',err);
      })
    }
    
    render() { 
    
        const columns = [
          {
            Header : 'Class',
            accessor : 'class',
            maxWidth : 80,
            
          },
          {
            Header : 'Section',
            accessor : 'section'
          },
          {
            Header : 'Time',
            accessor : 'time'
          }
        ]
    
        return (
          <div>
            <SideNavbar/>
            <Container>
            <h1>Teacher</h1>
            <Row>
      
              <Col sm={8}>
      
                <Card className = 'p-4'>
      
                  <Form className="m-4" onSubmit={this.handleOnSubmit}>
      
                    {/* <Row className="mt-4">
                      <Col>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="" />
                      </Col>
                    </Row> */}
      
                    <Row className="mt-4">
                      <Col>
                        <Form.Label>Teacher Name</Form.Label>
                        <Form.Control 
                          value={this.state.teacher.teacher_name}
                          onChange={this.handleOnChange}
                          name='teacher_name'
                          placeholder="" />
                      </Col>
                      <Col>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                          value={this.state.teacher.subject_name}
                          onChange={this.handleOnChange}
                          name='subject_name'
                          as='select'>
                            {
                              this.state.subject.map((item)=>{
                                return <option 
                                  key={item.subject_id} 
                                  value={item.subject_name}>
                                    {item.subject_name}
                                </option>
                              })
                            }
                        </Form.Control>
                      </Col>
                    </Row>
      
                    <Row className="mt-4">
                      <Col>
                        <Form.Label>Date of Birth</Form.Label><br/>
                        <Form.Control 
                          value={this.state.teacher.teacher_date_of_birth}
                          placeholder="" 
                          onChange={this.handleOnChange}
                          name='teacher_data_of_birth'
                          className="datepicker"/>
                      </Col>
                      <Col>
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                          value={this.state.teacher.teacher_address}
                          onChange={this.handleOnChange}
                          name='teacher_address'
                          placeholder="" />
                      </Col>
                      <Col>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          value={this.state.teacher.teacher_phone}
                          onChange={this.handleOnChange}
                          name='teacher_phone'
                          placeholder="" />
                      </Col>
                    </Row>
      
                    <Row className="mt-4">
                      <Col>
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control placeholder="" as="select">
                          <option defaultValue>None</option>
                          <option>Transport1</option>
                          <option>Transport2</option>
                          <option>Transport3</option>
                        </Form.Control>
                      </Col>
                    </Row>
      
                    <Row className="mt-4">
                      <Col>
                      <Button variant="primary" type='submit' className="btn btn-primary btn-lg btn-block">SAVE</Button>
                      </Col>
                    </Row>
                  </Form>
      
                </Card>
      
              </Col>
      
            <Col sm={4}>
              <Row>
                <Card style={{ width: '18rem' }}>
                  <img src={'http://localhost:8000/teachers/getTeacherImage/'+this.state.teacher.teacher_imageURL} 
                        className='img-rounded' 
                        alt='profile-image'/>
                </Card>
              </Row>
              <Row className="mt-2">
                <Card style={{ width: '18rem', padding : '8px' }}>
                  <h5>Schedule</h5>
                  <ReactTable
                        columns = {columns}
                        data = {data}
                        showPagination = {true}
                        showPaginationBottom={true}
                        defaultPageSize={5}
                        showPageSizeOptions = {false}
                    ></ReactTable>
                  
                </Card>
              </Row>
            </Col>
      
          </Row>
          
          </Container>
          
          </div>
        );
      }
}

export default AdminTeacherProfile;