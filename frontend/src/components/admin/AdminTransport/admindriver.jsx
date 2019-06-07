import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from "../../SideNavMenu";
class AdminDriver extends Component {

    constructor() {
        super();
        this.state = {
            vehicle: []
        }
    }
    componentDidMount() {
        var selectedvalue;
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(vehicles => {
            console.log('vechicle' + vehicles)
            this.setState({ vehicle: vehicles })

        });
        $(document).ready(function () {

            $(".vehicleselect").change(function () {
                selectedvalue = $(this).children('option:selected').val();
                console.log(selectedvalue);
            });

            //if selectvalue က null ဆိုရင္ ကို save ကို click မွ  check လုပ္



        });
    }

    render() {
        let vehicle = this.state.vehicle;
        let optionItems = vehicle.map((vechicle) =>
            <option key={vechicle.userId}>{vechicle.userId}</option>
        );
        let drivertable = vehicle.map((vehicle) =>
            <tr>
                <th>{vehicle.id}</th>
                <th>{vehicle.userId}</th>
            </tr>
        );

        return (
            <div>
                <Navbar/>
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

                                                <select class='vehicleselect'>
                                                    {optionItems}
                                                </select>
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
                        <div class='col-xl-6 col-lg-6'>
                            <div class='container'>
                                <table>
                                    <tr>
                                        <th>Drvier Name</th>
                                        <th>Vehicle Number</th>
                                    </tr>
                                    {drivertable}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDriver;