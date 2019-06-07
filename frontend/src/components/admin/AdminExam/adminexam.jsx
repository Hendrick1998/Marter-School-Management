import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import '../AdminCss/adminexam.css';
import SideNavMenu from '../../SideNavMenu';
class AdminExam extends Component {



  constructor(props) {
    super(props);

    this.state = {
      exam: []
    }
  }

  componentDidMount() {

    $('.datepicker').datepicker({
      minDate: 0
    });
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(res => res.json()).then(exam => {

      exam = exam.slice(0, 5);
      this.setState({ exam: exam })


    })


  }
  render() {

    let exam = this.state.exam;
    let examitem = exam.map((exam) =>
      <tr>
        <td>{exam.userId}</td>
        <td>{exam.id}</td>
        <td>{exam.userId}</td>
        <td>Edit Delete</td>
      </tr>

    );

    return (
      <div>
        <SideNavMenu/>
        <div style={{paddingTop:'2rem',paddingLeft:'4rem'}}>
           <div class='row'>
          <div class='col-xl-8'>
            <div class='container'>
              <div class='card'>
                <div class='card-body'>
                  <div class='container col-xl-12'>
                    <div class='form-group'>
                      <label>Exam</label>
                      <input type='text' class='form-control'></input>
                    </div>
                  </div>
                  <div class='row container'>
                    <div class='col-xl-6 container'>
                      <div class='form-group'>
                        <label>Grade</label>
                        <select name="class" id="class" class='selectclass form-control'>
                          <option selected>Class A</option>
                          <option>Class B</option>
                          <option>Class C</option>
                        </select>
                      </div>
                    </div>
                    <div class='col-xl-6 container'>
                      <div class='form-group'>
                        <label>Month</label>
                        <select name="class"  id="class" class='selectclass form-control'>
                          <option selected>Class A</option>
                          <option>Class B</option>
                          <option>Class C</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class='row container'>
                    <div class='col-xl-3 col-lg-3 container'>
                      <div class='from-group'>
                        <label>Subject Name</label>
                        <input type='text'  class='form-control'></input>
                      </div>
                    </div>
                    <div class='col-xl-3 col-lg-3 container'>
                      <div class='form-group'>
                        <label>Exam Date</label>
                        <input type='text' class='datepicker form-control'></input>
                      </div>
                    </div>
                    <div class='col-xl-3 col-lg-3 container'>
                      <div class='from-group'>
                        <label>Start Time</label>
                        <input type='text' class='form-control'></input>
                      </div>
                    </div>

                    <div class='col-xl-3 col-lg-3  container'>
                      <div class='from-group'>
                        <label>End Time</label>
                        <input type='text' class='form-control'></input>
                      </div>
                    </div>
                  </div>
                  <div class='container'>

                    <button class='btn btn-primary col-xl-12 col-lg-12'>Save</button>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class='col-xl-4'>

            <div class='container'>
              <div class='col-xl-12 col-lg-12'>


                <table>
                  <tr>
                    <th>Id</th>
                    <th>userId</th>
                    <th>name</th>
                    <th>Mangae</th>
                  </tr>
                  {examitem}


                </table>
              </div>


            </div>
          </div>
        </div>
      </div></div>
        



    )
  }
}

export default AdminExam