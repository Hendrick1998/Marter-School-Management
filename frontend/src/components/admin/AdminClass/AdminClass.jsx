import React, { Component } from 'react';
import AdminClassChild from './AdminClassChild';
import SideNav from "../../SideNavMenu";
class AdminClass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            classes : [
                {
                    id : 1,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                },
                {
                    id : 2,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                },
                {
                    id : 3,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                },
                {
                    id : 4,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                },
                {
                    id : 5,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                },
                {
                    id : 6,
                    academic_year : '2018-2019',
                    class_no : '1',
                    teacher : 'Daw Aye Aye Chaw'
                }
            ]
         }
    }
    render() { 
        const class_components = this.state.classes.map(function(_class){
            return  <AdminClassChild key={_class.id} class_no={_class.class_no}/>
          })
        return ( 
            <div>
                <SideNav/>
                <div className='container'>
                    <h2 className='mt-2'>Class</h2>

                    <div className='row'>

                        <div className='col-xl-7 col-lg-7'>
                            <div className='card' style={{width:'100%'}}>
                            <div class='card-body'>
                                <form className='container'>
                                    
                                    <div className='row container'>
                                    <div class='col-xl-6 col-lg-6'>
                                    <div className='form-group'>
                                        <label>Class</label>
                                        <input className='form-control' placeholder="" />
                                    </div>
                                    </div>
                                    
                                    <div class='col-xl-6 col-lg-6 form-group' >
                                        <label>Section</label>
                                        <input className='form-control' placeholder="" />
                                    </div>
                                    </div>
                                
                    
                                    <div className='row container'>
                                    <div class='col-xl-12 col-lg-12 form-group'>
                                        <label>Supervisor Name</label>
                                        <input className='form-control' placeholder="" />
                                    </div>
                                    
                                    </div>
                    
                                    <div className='row container'>
                                    <div class='col-xl-12 col-lg-12 form-group'>
                                        <label>Maximum Student</label>
                                        <input className='form-control col-xl-12' placeholder="" />
                                    </div>
                                    
                                    </div>
                    
                                    <div className='row container'>
                                    <div className='col-xl-12 col-lg-12'>
                                        <label>Academic Year</label>
                                        <select placeholder="" className='form-control'>
                                        <option selected>Academic 1</option>
                                        <option>Academic 2</option>
                                        <option>Academic 3</option>
                                        <option>Academic 4</option>
                                        </select>
                                    </div>
                                    
                                    </div>
                                    
                    <div class='container'>
                      <div class='row'>

                        <button class='btn btn-primary col-xl-12'>Save</button>

                      </div>
                    </div>
                                </form>
                            </div>
                        </div>
                        </div>

                        <div className='col-xl-5 col-lg-5'> 
                            <div className='card '>
                            <div class='card-body'>
                                {class_components}
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default AdminClass;