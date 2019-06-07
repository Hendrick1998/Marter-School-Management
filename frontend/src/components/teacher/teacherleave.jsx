import React,{Component} from 'react';
import {TabView,TabPanel} from 'primereact/tabview';
import 'primereact/resources/primereact.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/rhea/theme.css';
import $ from 'jquery';
import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';


class TeacherLeave extends Component{

    componentDidMount(){
        $('#daterange').daterangepicker();
       
    }
    render(){
        return(
            <div>
                <div class='container'>
                <TabView class='tabview' renderActiveOnly={true}>
                        <TabPanel header=" Leave Approposal" leftIcon="pi pi-calendar">
                        
                        <div class='form-group container'>
                        <label>Date Range</label>
                        <input type='text' class='col-xl-12 from-control' id='daterange' style={{height:50}}></input>

                           </div>
                        <div class='form-group container'>
                        <label>Reason</label>
                        <textarea class='col-xl-12 form-control' style={{height:200}}></textarea>
                        </div>
                        <div class='container'>
                            <button class='btn btn-primary col-xl-12'>Save</button>
                        </div>
                        </TabPanel>
                        <TabPanel header="Leave Record" rightIcon="pi pi-user">
                            <p>Fran</p>
                        </TabPanel>
                        
                        </TabView>

            </div>
            </div>
        )
    }
}

export default TeacherLeave;