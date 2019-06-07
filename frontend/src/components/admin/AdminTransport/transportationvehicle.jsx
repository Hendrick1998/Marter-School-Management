import React,{Component} from 'react';
import SideNav from "../../SideNavMenu";
class AdminTransportVehicle extends Component{
        render(){
            return(
                <div>
                    <SideNav/>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-xl-6 col-lg-6'>
                                <div class='container'>
                                    <div class='card'>
                                        <div class='card-body'>
                                            <h6 class='card-title'>Vechicle Detail</h6>
                                            <div class='container col-xl-12 col-lg-12'>
                                                <div class='form-group'>
                                                    <label>Vehicle No</label>
                                                    <input type='text' class='form-control'></input>
                                                </div>
                                            </div>
                                            <div class='container col-xl-12 col-lg-12'>
                                                <div class='form-group'>
                                                    <label>SRC NO</label>
                                                    <input type='text' class='form-control'></input>
                                                </div>
                                            </div>
                                            <div class='container col-xl-12 col-lg-12'>
                                                <div class='form-group'>
                                                    <label>Date Of Birth</label>
                                                    <input type='text' class='form-control'></input>
                                                </div>
                                            </div>
                                            <div class='container col-xl-12 col-lg-12'>
                                                <div class='form-group'>
                                                    <label>License</label>
                                                    <input type='text' class='form-control'></input>
                                                </div>
                                            </div>
                                            <div class='container col-xl-12 col-lg-12'>
                                                <div class='form-group'>
                                                    <label>Phone Number</label>
                                                    <input type='text' class='form-control'></input>
                                                </div>
                                            </div>
                                            <div class='container'>
                                                <button class='btn btn-primary col-xl-12 col-lg-12'>Save</button>
                                            </div>
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

export default AdminTransportVehicle;