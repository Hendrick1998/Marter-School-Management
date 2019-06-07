import React, { Component } from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percentage : 66
     }
  }
  render() { 
    return ( 
      <div>
        <div
          className='container'
        >
          <div className='row my-4'>
            <div className='col-8' style={{backgroundColor:'#fff'}}>

              <div className='row'>
                <div className='card' style={{widht : '10%'}}>
                  <img
                    width={200}
                    height={200} 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiS56_l2fo1IyJf7LxT_0Jf1cwB5kFIVextJKohmze7_xs3JLzg'/>
                </div>
                <div className='col' style={{marginTop:'30px',color:'#000000'}}>
                    <p>Name : </p>
                    <p>Student ID : </p>
                    <p>Class : </p>
                    <p>Section : </p>
                  </div>
              </div>

              <div className='row mt-4 mr-2'>
                <div className='card' style={{width:'100%',padding:'12px',height:'20%'}}>
                  <h4 style={{color : '#000'}}>Homework</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                      </tr>
                    </thead>
                    
                  </table>
                </div>

                
              </div>
              <div className='row mt-4 mr-2'>
                  <div className='card' style={{width:'100%',padding:'12px'}}>
                    <div className='row' style={{width:'100%',padding:'12px'}}>
                      <h4>Exam Result</h4>
                      <div className='col'>
                          <div className="dropdown" style={{float:'right'}}>
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Choose Month
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item">January</a>
                              <a className="dropdown-item">February</a>
                              <a className="dropdown-item">March</a>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>Myanmar : </p>
                        <p>English : </p>
                        <p>Mathematic : </p>
                        <p>Science : </p>
                        <p>Geography : </p>
                        <p>History : </p>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            <div className='col-4'style={{backgroundColor : '#fff'}}>
              <div className='row mt-4'>
                <div className='col'>
                  <label style={{textAlign:'center',width:'100%'}}>Attendance Percentage</label>
                  <div style={{width:'100%'}}>
                  <div style={{width:'138px',margin:'auto',padding:'8px'}}>
                    <CircularProgressbar
                        percentage={this.state.percentage}
                        text={`${this.state.percentage}%`}
                    />
                  </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='card w-100'>
                  <div className='card-header bg-primary text-center text-white'>Notification</div>
                  <div className='card-body'>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Event-Name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Student;
