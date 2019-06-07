import React, { Component } from 'react';
import SideNav from "../../SideNavMenu";
class AdminClassChild extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <SideNav/>
                {/* <div className='row' style={{marginLeft:'32px'}}>
                    <p style={{marginTop:'8px'}}>Class {this.props.class_no}</p>
                    <button className="btn btn-primary btn-sm w-25 ml-2">Edit</button>
                    <button className='btn btn-danger btn-sm w-25 ml-2'>Delete</button>
                </div> */}

                <div class='row'>
                <div class='col-xl-4  col-lg-4 col-sm-4 container'>
                < p> Class {this.props.class_no}  </p>
                </div>
                <div class='col-xl-4 col-lg-4 col-sm-4 container'>
                <button class='btn btn-primary'>Edit</button>
                </div>
                <div class='col-xl-4 col-lg-4 col-sm-4 container'>
                <button class='btn btn-danger'>Delete</button>
                </div>
                </div>
            </div>
         );
    }
}
 
export default AdminClassChild;