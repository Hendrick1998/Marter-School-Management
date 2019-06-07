import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../AdminCss/adminaddteacher.css';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Navbar from '../../SideNavMenu';




class AdminAddTeacher extends Component {

  constructor(props){
    super(props);
    this.state={
      subjects : [],
      userRoles : [],
      teacher : {
        username : '',
        phone : '',
        password : '',
        subject : '',
        address : '',
        dateofbirth : '',
        role : '',
        created_by: 'Admin',
        updated_by: 'Admin',
        imageURL : {}
      }
    }
  }

  componentDidMount() {
    $(function () {
      $(".datepicker").datepicker();
    });

    $("#transport").selectmenu({
      width: 200,
    });


    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#profile-img-tag').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#profile-img').change(function () {
      readURL(this);
    });

    //Get Add Subjects & Role
    const subject_url = 'http://localhost:8000/subjects/getAllSubject';
    fetch(subject_url)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        //Set data to state
        this.setState({
          subjects : data
        },()=>{
          console.log(this.state.subjects);
        })
      })

    const user_role_url = 'http://localhost:8000/userRoles/getAllUserRole';
    fetch(user_role_url)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        //Set data to state
        this.setState({
          userRoles : data
        },()=>{
          console.log(this.state.userRoles);
        })
      })
  }

  handleOnChange=(event)=>{
    const {name,value} = event.target;
    const teacherObj = this.state.teacher;
    teacherObj[name] = value;
    this.setState({
      teacher:teacherObj
    },()=>{
      console.log(this.state.teacher);
    })
  }

  handleFileChange=(event)=>{
    const file = event.target.files[0];
    const teacherObj = this.state.teacher;
    teacherObj.imageURL = file;
    this.setState({
      teacher:teacherObj
    },()=>{
      console.log(this.state.teacher);
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const teacherObj = this.state.teacher;
    let subject_index = 0;
    let role_index = 0;
    const arr_sub = this.state.subjects;
    const arr_role = this.state.userRoles;
    for(let i=0;i<arr_sub.length;i++){
      if(arr_sub[i].subject_name === teacherObj.subject){
        subject_index = i+1;
        teacherObj.subject = subject_index;
      }
    }
    for(let i=0;i<arr_role.length;i++){
      if(arr_role[i].ur_role === teacherObj.role){
        role_index = i+1;
        teacherObj.role = role_index;
      }
    }

    console.log('Submit',teacherObj);

    var formData = new FormData();

    formData.append('data',JSON.stringify(teacherObj));
    formData.append('uploadTeacherFile',teacherObj.imageURL);

    const addTeacherURL = 'http://localhost:8000/users/addUser/teacher';
    fetch(addTeacherURL,{
      method:'POST',
      body:formData
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
    return (
      <div >
        <Navbar />
        <div className='container'>
          <div className="row">
            <div className="col-xl-8 col-lg-8" >
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Profile Infromation</h5>
                  <form onSubmit={this.handleSubmit}>
                    {/* <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Register Number</label>
                            <input type='text' className='form-control'></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Register Date</label>
                            <input type='text' className='form-control datepicker'></input>
                          </div>
                        </div>

                      </div>
                    </div> */}
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Teacher Name</label>
                            <input 
                              type='text' 
                              className='form-control'
                              name='username'
                              onChange={this.handleOnChange}
                              ></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Password</label>
                            <input 
                              type='text' 
                              className='form-control'
                              name='password'
                              onChange={this.handleOnChange}
                              ></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-12 col-lg-12'>
                          <div className='form-group'>
                            <label>Subject</label>
                            <select 
                              name='subject'
                              className='form-control'
                              onChange={this.handleOnChange}>
                              {
                                this.state.subjects.map(item=>{
                                  return <option value={item.subject_name} key={item.subject_id}>
                                    {item.subject_name}
                                  </option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                        {/* <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Section</label>
                            <input type='text' className='form-control'></input>
                          </div>
                        </div> */}

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Date of Birth</label>
                            <input 
                              type='text' 
                              className='form-control datepicker'
                              name='dateofbirth'
                              onChange={this.handleOnChange}
                              ></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Phone Number</label>
                            <input 
                              type='text' 
                              className='form-control'
                              name='phone'
                              onChange={this.handleOnChange}
                              ></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Address</label>
                            <input 
                              type='text' 
                              className='form-control'
                              name='address'
                              onChange={this.handleOnChange}
                              ></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Role</label>
                            <select className='form-control' name='role' onChange={this.handleOnChange}>
                              {
                                this.state.userRoles.map(item=>{
                                  return <option value={item.ur_role} key={item.ur_id}>
                                    {item.ur_role}
                                  </option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                        {/* <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Student ID</label>
                            <input type='text' className='form-control'></input>
                          </div>
                      </div>*/}
                        <div className='col-xl-4 col-lg-6'>

                          <label for="speed">Transport</label>
                          <select name="transport" id="transport" className='form-control'>
                            <option>No</option>
                            <option>Yes</option>
                            <option disabled selected>None</option>
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


              <img src=" " id="profile-img-tag" width='300px' height='200px'></img>

              <input 
                type='file' 
                name='file' 
                placeholder='Choose Photo' 
                onChange={this.handleFileChange}
                id='profile-img'></input>

            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default AdminAddTeacher;