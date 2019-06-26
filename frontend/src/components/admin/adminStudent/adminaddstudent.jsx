import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../AdminCss/adminaddstudent.css';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Navbar from '../../SideNavMenu';
import {Route, Redirect} from 'react-dom';


class AdminAddStudent extends Component {

  constructor(){
    super();
    this.state={
      studentData : {
        username : '',
        password : '',
        rollno : '',
        year : '',
        address : '',
        dateofbirth : '',
        phone : '',
        parent : '',
        role : '',
        created_by : 'Admin',
        updated_by : 'Admin',
        imageURL : {},
      },
      userRoleData : []
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

    //Fetch User Role
    const userRoleURL = 'http://localhost:8000/userRoles/getAllUserRole';
    fetch(userRoleURL)
      .then((response)=>{
        return response.json()
      })
      .then((userRoleData)=>{
        this.setState({
          userRoleData : userRoleData
        },()=>{
          console.log(this.state.userRoleData);
        })
      })
  }

  handleOnChange=(event)=> {
    let obj_tmp = this.state.studentData;
    let {name, value} = event.target;
    obj_tmp[name] = value;
    this.setState({
      studentData : obj_tmp
    },()=>{
      console.log(this.state.studentData);
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    let obj_tmp = this.state.studentData;
    let user_role_arr = this.state.userRoleData;
    let user_role_index = 0;
    for(let i =0 ;i<user_role_arr.length; i++){
      if(user_role_arr[i].ur_role === obj_tmp.role){
        user_role_index = i+1;
        obj_tmp.role = user_role_index;
      }
    }
    let formData = new FormData();
    formData.append('data',JSON.stringify(obj_tmp));
    formData.append('uploadfile',obj_tmp.imageURL);
    console.log(formData);
    console.log(obj_tmp.imageURL);
    const studentDataPostURL = 'http://localhost:8000/users/addUser/student';
    fetch(studentDataPostURL,{
      method : 'POST',
      body : formData,
      // headers :{
      //   'Content-Type':'multipart/form-data'
      // }
    }).then(res=>{
      if(res.ok) return res.json()
    }).then(data=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log('Error',err);
    })
  }

  fileChangeHandler=(event)=>{
    const file = event.target.files[0];
    let obj_tmp = this.state.studentData;
    obj_tmp.imageURL = file;
    console.log(file);
    this.setState({
      studentData : obj_tmp
    },()=>{
      console.log(this.state.studentData);
    });
  }

  render() {
    return (
      <div >
          <Navbar/>
        <div  >
        <div className='container'>
          <div className="row" >
        
            <div className="col-xl-8 col-lg-8"  >
            <div className='container'>
              <div className='card mb-4'>
                <div className='card-body'>
                  <h5 className='card-title'>Profile Infromation</h5>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Name</label>
                            <input 
                              type='text'
                              name='username'
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required placeholder="Mg Myo Myint Win Sone"></input>
                          </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                            <label>Password</label>
                            <input 
                              type='password'
                              name='password'
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container' >
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                        <div className='form-group'>
                            <label>NRC Number</label>
                            <input 
                              type='text'
                              name='year'
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required placeholder="9/KMN(Naing) 071774"></input>
                          </div>
                          
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                              <label>Email</label>
                              <input 
                                type='text'
                                name='rollno'
                                onChange={this.handleOnChange.bind(this)}
                                className='form-control'
                                required placeholder = "e.g. JohnDoe@gmail.com"></input>
                            </div>
                          </div>

                      </div>
                    </div>

                    <div className='container' >
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                        <div className='form-group'>
                            <label>Year</label>
                            <input 
                              type='text'
                              name='year'
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required placeholder = "Grade-10"></input>
                          </div>
                          
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                          <div className='form-group'>
                              <label>Roll Number</label>
                              <input 
                                type='text'
                                name='rollno'
                                onChange={this.handleOnChange.bind(this)}
                                className='form-control'
                                required placeholder = "32"></input>
                            </div>
                          </div>

                      </div>
                    </div>
                    {/* <div class='container'>
                      <div class='row'>
                        <div class='col-xl-6 col-lg-6'>
                          <div class='form-group'>
                            <label>Class</label>
                            <input type='text' class='form-control'></input>
                          </div>
                        </div>
                        <div class='col-xl-6 col-lg-6'>
                          <div class='form-group'>
                            <label>Section</label>
                            <input type='text' class='form-control'></input>
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
                              name='dateofbirth'
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control datepicker'
                              required placeholder = "MM/DD/YY"></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Phone Number</label>
                            <input 
                              type='text'
                              name='phone' 
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required placeholder = "09-XXXXXXXXX"></input>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Address</label>
                            <input 
                              type='text'
                              name='address'
                              onChange={this.handleOnChange.bind(this)} 
                              className='form-control'
                              required placeholder = "73 St, Mandalay"></input>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                          <div className='form-group'>
                            <label>Parent</label>
                            <input 
                              type='text'
                              name='parent' 
                              onChange={this.handleOnChange.bind(this)}
                              className='form-control'
                              required placeholder = "U Ba Htun"></input>
                          </div>
                        </div>
                      
                        <div className='col-xl-4 col-lg-4'>

                          <label htmlFor="speed">Transport</label>
                          <select name="transport" id="transport">
                            <option>No</option>
                            <option>Yes</option>
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
            </div>
            
            <div className='col-xl-4 col-lg-4'>

            <div className='container'>
              <img src=" " id="profile-img-tag" width='280px' height='280px'></img>

              <input 
                type='file' 
                name='file' 
                placeholder='Choose Photo' 
                id='profile-img'
                name='imageURL'
                onChange={this.fileChangeHandler}
                ></input>

            </div>
            </div>


        
</div>
        </div>
        </div>
      </div>
    )
  }
}

export default AdminAddStudent;