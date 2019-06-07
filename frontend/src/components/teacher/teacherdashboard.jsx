import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/primereact.css';
import 'primereact/resources/primereact.min.css';
import './teacherdashboard.css';
import 'primereact/resources/themes/rhea/theme.css';
import $ from 'jquery';





class TeacherDashboard extends Component {


    constructor(props) {
        super(props);

        this.state = {
            classess: [],
            classes: []
        }
    }
    componentDidMount() {

        var selectedclass;
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(classes => {
            console.log('vechicle' + classes)

            classes = classes.slice(0, 5);
            this.setState({ classes: classes })

        });

        $('.datepicker').datepicker({
            minDate: 0
        })
        $(document).ready(function () {

            $(".vehicleselect").change(function () {
                selectedclass = $(this).children('option:selected').val();
                console.log(selectedclass);
            });
        })
    }

    render() {

        let classes = this.state.classes;
        let optionItems = classes.map((classes) =>
            <option key={classes.userId}>{classes.id}</option>

        );

        let homeworktable = classes.map((classes) =>
            <tr>
                <td>{classes.title}</td>
                <td>{classes.id}</td>
                <td>{classes.id}</td>
                <td>{classes.id}</td>
                <td>{classes.id}</td>
            </tr>
        );

        let schedule = classes.map((classes) =>
            <tr>
                <td>Myanmar</td>
                <td>{classes.id}</td>
                <td>{classes.id}</td>
                <td>{classes.id}</td>
            </tr>
        );
        let event = classes.map((classes) =>
            <div class='row'>
                <div class='col-xl-4 col-lg-4  col-xs-4 col-sm-4 text-center '>
                    Water Festival
                </div>
                <div class='col-xl-3 col-lg-3 col-xs-3 col-sm-3 text-center'>
                    {classes.userId}
                </div>
                <div class='col-xl-2 col-lg-2 col-xs-2 col-sm-2 text-center'>
                    {classes.id}
                </div>
                <div class='col-xl-3 col-lg-3 col-xs-3 col-sm-3 text-center'>
                    {classes.id}
                </div>
            </div>
        );
        return (
            <div>
                <div class='row'>
                    <div class='col-xl-7'>
                        <div class='container'>


                            <TabView class='tabview' renderActiveOnly={true}>
                                <TabPanel header=" Add Homework" leftIcon="pi pi-calendar">
                                    <div class='row'>
                                        <div class='form-group col-xl-6'>
                                            <label>Class</label>
                                            <select class='form-control'>{optionItems}</select>
                                        </div>
                                        <div class='form-group col-xl-6'>
                                            <label>Section</label>
                                            <select class='form-control'>{optionItems}</select>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <div class='col-xl-6 form-group'>
                                            <label>Start Date</label>
                                            <input type='text' class='datepicker form-control'></input>
                                        </div>
                                        <div class='col-xl-6 form-group'>
                                            <label>End Date</label>
                                            <input type='text' class='datepicker form-control'></input>
                                        </div>
                                    </div>

                                    <div class='row'>

                                        <div class='col-xl-12 col-lg-12'>
                                            <div class='form-group'>
                                                <label>Description</label>
                                                <textarea class='col-xl-12' style={{ height: 200 }}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class='row'>
                                        <div class='container'>
                                            <button class='btn btn-primary col-xl-12 col-lg-12'>Save</button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header="Homework" rightIcon="pi pi-user">
                                    <table>
                                        <tr>
                                            <th>Descrioption</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                        </tr>
                                        {homeworktable}
                                    </table>
                                </TabPanel>

                            </TabView>

                        </div>
                    </div>
                    <div class='col-xl-5'>
                        <div class='container'>
                            <div class='card'>
                                <div class='card-header text-center header'>
                                    Notification
                                </div>
                                <div class='card-body'>
                                    <div class='row'>
                                        <div class='col-xl-4 col-lg-4 col-xs-4 col-sm-4 text-center textcard'>
                                            Event Name
                                            </div>
                                        <div class='col-xl-3 col-lg-3  col-xs-3 col-sm-3 text-center textcard'>
                                            Place
                                            </div>
                                        <div class='col-xl-2 col-lg-2 col-xs-2 col-sm-2 text-center textcard'>
                                            Time
                                            </div>
                                        <div class='col-xl-3 col-lg-3 col-xs-3 col-sm-3 text-center textcard'>
                                            Date
                                            </div>

                                    </div>
                                    {event}
                                </div>
                            </div>
                        </div>
                        <div class='container'>
                            <div class='card'>
                                <div class='card-header text-center header'>
                                    Schedule
                                </div>
                                <div class='card-body'>
                                    <div class='row'>
                                        <table>
                                            <tr>
                                                <th>Subject Name</th>
                                                <th>Time</th>
                                                <th>Class</th>
                                                <th>Section</th>

                                            </tr>
                                            {schedule}
                                        </table>

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


export default TeacherDashboard;    