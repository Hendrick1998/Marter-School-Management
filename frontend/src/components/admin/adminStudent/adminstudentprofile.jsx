import React, { Component } from 'react';
import $ from 'jquery';

import '../AdminCss/studentprofile.css';
import Navbar from '../../SideNavMenu';
import 'jquery-ui-bundle';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'jquery-ui-bundle/jquery-ui.css';
// import {Pie,Bar,Line} from 'react-chartjs-2';

const percentage=100;
let progress;

class StudentProfile extends Component {
    
  constructor(props){
    super(props);

    this.state={
      labels: ['Student','Parent','Teacher'],
      datasets:[{
        label:'This Is School Bar Chart',
        data:[1000,700,510],
        backgroundColor:['green','red','blue']
      }],
      student: this.props.location.state
    }
  } 
  componentDidMount() {
    $(function () {
      $(".datepicker").datepicker();
    });

    $("#transport").selectmenu({
      width: 200,
      color: "#fff"
    });
    $("#selectmonth").selectmenu({
      width: 200,
      background: '#fff'
    });
    let student = this.props.location.state;
    console.log(student);
  }

  handleOnChange=(event)=>{
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    const studentObj = this.state.student;
    console.log(studentObj);
    studentObj[event.target.name] = event.target.value;
    console.log(studentObj);
    this.setState({
      student:studentObj
    },()=>{
      console.log('Success');
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const student_data = this.state.student;
    const student_url = 'http://localhost:8000/students/updateStudent';
    fetch(student_url,{
      method : 'PUT',
      body : JSON.stringify(student_data),
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then((response)=>{
        console.log('Success',JSON.stringify(response));
      });
  }

  render() {

    console.log(this.state.student);
    if(percentage>=68 && percentage<=75){
       progress=<CircularProgressbar
      percentage={percentage}
    text={`${percentage}%`}
    styles={{
      path:{
        stroke:'#ff8800'
      },
      text: {
        
        fill: '#ff8800'
      },
    }}
        />
    }
    else if(percentage >=50 && percentage <=67){
      progress=<CircularProgressbar
      percentage={percentage}
    text={`${percentage}%`}
    styles={{
      path:{
        stroke:'red',
        strokeLinecap: 'circular',
      },
       text: {
        
        fill: '#ff0000'
      },
    }}
        />
    }

    else if(percentage>=76 && percentage<=100){
      progress=<CircularProgressbar
      percentage={percentage}
    text={`${percentage}%`}
    styles={{
      path:{
        stroke:'green'
      },
      text: {
        
        fill: '#32cd32'
      },
    }}
        />
    }
    return (
      <div >
        <Navbar/>
        <div className='container'>
          <div className="row">
            <div className="col-xl-8 col-lg-8" >
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Profile Infromation</h5>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Student Name</label>
                            <input 
                              type='text' 
                              className='form-control' 
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_name}
                              name='student_name'></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Password</label>
                            <input type='text' className='form-control' ></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Roll NO:</label>
                            <input 
                              type='text' 
                              className='form-control'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_roll_no}
                              name='student_roll_no'></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Year</label>
                            <input 
                              type='text' 
                              className='form-control'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_year} 
                              name='student_year'></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Class</label>
                            <input type='text' className='form-control'></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Section</label>
                            <input type='text' className='form-control'></input>
                          </div>
                        </div>

                      </div>
                    </div> */}
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Date of Birth</label>
                            <input 
                              type='text' 
                              className='form-control datepicker'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_date_of_birth} 
                              name='student_date_of_birth'></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Phone Number</label>
                            <input 
                              type='text' 
                              className='form-control'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_phone} 
                              name='student_phone'></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Address</label>
                            <input 
                              type='text' 
                              className='form-control'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_address} 
                              name='student_address'></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Parents</label>
                            <input 
                              type='text' 
                              className='form-control'
                              onChange={this.handleOnChange.bind(this)}
                              value={this.state.student.student_parent_id} 
                              name='student_parent_id'></input>
                          </div>
                        </div>
                        {/* <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Student ID</label>
                            <input type='text' className='form-control'></input>
                          </div>
                        </div> */}
                        <div className='col-xl-4 col-lg-4'>

                          <label htmlFor="speed">Transportion</label>
                          <select name="transport" id="transport">
                            <option>No</option>
                            <option>Yes</option>
                            <option disabled defaultValue>None</option>
                          </select>

                        </div>
                      </div>
                    </div>

                    <div className='container'>
                      <div className='row'>

                        <button className='btn btn-primary col-xl-12'>Save</button>

                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4'>

              <img width='300px' height='200px' src={'http://localhost:8000/students/getStudentImage/'+this.state.student.student_imageURL}></img>

              <div className='card attandance-card'>
                <div className='card-body'>

                  <label htmlFor="#selectmonth">Student Attandance for </label>
                  <select name="transport" id="selectmonth">
                    <option>Janauary</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>

                  </select>
                  {/* just teting piechart show for {attendance percentage} */}
                  <div className='container'>

                  {progress}

                  
                    {/* <Line
                    data={{
                      labels:this.state.labels,
                      datasets:this.state.datasets
                    }}
                    
                    height='500px'
                    
                    ></Line> */}
  
			            
                  </div>

                </div>
              </div>

            </div>


          </div>

        </div>
      </div>
    )
  }
}

export default StudentProfile;