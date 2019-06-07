import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import SideNavMenu from "../../SideNavMenu";
class AdminAddSubject extends Component {

    componentDidMount() {

        var selectedclass;
        $(document).ready(function () {

            $("select.selectclass").change(function () {
                selectedclass = $(this).children("option:selected").val();

            })


            $('#save').click(function () {

                if (selectedclass == null) {
                    selectedclass = "Class A";

                }
                console.log(selectedclass)
                var editsubject = $('.editsubject');
                var editsubjecthtml = "<div class='row'><div class='col-xl-4  col-lg-4 col-sm-4 container'><p style={{ paddingTop:100}}>" + selectedclass + "</p></div><div class='col-xl-4 col-lg-4 col-sm-4 container'><button class='btn btn-primary'>Edit</button></div><div class='col-xl-4 col-lg-4 col-sm-4 container'><button class='btn btn-danger'>Delete</buttton></div></div>"
                editsubject.append(editsubjecthtml);

            })


            $("select.selectNumofSubject").change(function () {
                var numofSubject = $(this).children('option:selected').val();
                var input = $('.input');
                input.remove();
                console.log(numofSubject);
                for (var i = 1; i <= numofSubject; i++) {
                    var wrapper = $('.field_wrapper');
                    var fieldHTML = '<div class="container input"><input class="col-xl-12 col-lg-12" placeholder="Enter Subject Name" type="text" name="field_name[]" value=""/></div>';
                    wrapper.append(fieldHTML);

                }
            })
        });
    }
    render() {
        return (
            <div>
                <SideNavMenu/>
                <div class='container'>
                    <div class='row'>
                        <div class='col-xl-8 col-lg-8'>
                            <div class='container'>
                                <div class='card'>
                                    <div class='card-body'>
                                        <div class='row'>
                                            <div class='col-xl-6 col-lg-6'>
                                                <div class='container'>
                                                    <div class='form-group'>


                                                        <label>Selct Number of Subject</label>
                                                        <select name="subject" class='selectNumofSubject form-control' style={{ width: 200 }} id="subject">
                                                            <option selected>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>


                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='col-xl-6 col-lg-6'>
                                                <div class='container'>
                                                    <div class=' form-group '>
                                                        <label>Select a Class</label>
                                                        <select name="class" style={{ width: 200 }} id="class" class='selectclass form-control'>
                                                            <option selected>Class A</option>
                                                            <option>Class B</option>
                                                            <option>Class C</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='container'>
                                            <div class='row'>

                                                <div class='card col-xl-12 col-lg-12'>
                                                    <div class='card-body'>

                                                        <div class="field_wrapper">

                                                            <div class='container input'>
                                                                <input class='col-xl-12 col-lg-12' placeholder='Enter Subject Name' type="text" name="field_name[]" value="" />

                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>
                                            <div class='container'>
                                                <button id='save' class='btn btn-primary col-xl-12 col-lg-12'>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-xl-4 col-lg-4'>
                            <div class='container'>
                                <div class='card'>
                                    <div class='card-body'>
                                        <div class='editsubject'></div>
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

export default AdminAddSubject;