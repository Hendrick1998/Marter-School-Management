import React,{Component} from 'react';
import '../AdminCss/admintecherrecord.css';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SideNavbar from '../../SideNavMenu';





class AdminTeacherRecord extends Component{
   
    constructor(props){
        super(props);
        
        this.state={
            teachers:[]
        }
    }
    
    componentDidMount(){
        const teacher_url = "http://localhost:8000/teachers/getAllTeacher";
        fetch(teacher_url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    teachers : data
                },()=>{
                    console.log(this.state.teachers);
                })
            })
    }
    render() {
        const columns = [
            {
                Header: "Name",
                accessor: "teacher_name",
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search User"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),
            },
            {
                Header: "Subject",
                accessor: "subject_name",
                filterable: true,
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search Name"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),

            },
            {
                Header: "Phone NO:",
                accessor: "teacher_phone",
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search Subject"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),
            },
            {
                Header: "Profile",
                Cell: props => {
                    return (
                        <button class='btn btn-primary'>See Profile</button>
                    )
                },
                style: {
                    textAlign: 'center'
                },
                width: 150,
                filterable: false
            },
            {
                Header: 'Delete',
                Cell: props => {
                    return (
                        <button class='btn btn-danger'>Delete</button>
                    )
                },
                style: {
                    textAlign: 'center'
                },
                width: 150,
                filterable: false
            }
        ]
        return(
          <div>
             <SideNavbar/>
             <div style={{paddingTop:'40px',paddingLeft:'60px',paddingRight:'20px'}}>
             <div class='row '>
                <div class='col-xl-8'>
                    <p class='text' >Teacher Records</p>
                </div>
                <div class='col-xl-4' > 
                <div style={{textAlign:'right',paddingRight:'10px', paddingTop:'10px' }}>
                  <Link to='adminaddteacher'>  
                  <button class='btn btn-primary' >Add Teacher</button></Link>
                </div>
                </div>
                </div>
            
           <div class='col-l-12 reacttable' >  
           
               <ReactTable 
               columns={columns}
               data={this.state.teachers}
               filterable
               defaultPageSize={10}
               noDataText={'Please Wait'}
               >
               </ReactTable>
               </div>
               </div>
             </div>
        )
    }
}



export default AdminTeacherRecord;