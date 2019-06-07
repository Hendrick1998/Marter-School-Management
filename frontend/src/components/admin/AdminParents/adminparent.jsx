import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../AdminCss/adminparent.css';
import { Link } from 'react-router-dom';
import SideNav from "../../SideNavMenu";

class AdminParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parents: []
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(parents => {
            this.setState({ parents: parents })
        })
    }

    onDelEvent(id) {
        const index = this.state.parents.findIndex(parents => {
            return parents.id === id;
        })
        this.state.parents.splice(index, 1);
        this.setState({ parents: this.state.parents });
    }

    render() {

        const columns = [
            {
                Header: "No",
                accessor: "userId",
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search User"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),
            },
            {
                Header: "Name",
                accessor: "id",
                filterable: true,
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search name"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),

            },
            {
                Header: "Student Name",
                accessor: "title",
                Filter: ({ filter, onChange }) => (
                    <input placeholder="Search Father Name"
                        onChange={event => onChange(event.target.value)}
                        value={filter ? filter.value : ''}
                    />
                ),
            },
            {
                Header: "Student Profile",
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
                        <button class='btn btn-danger' onClick={() => {
                            this.onDelEvent(props.original.id)
                        }}>Delete</button>
                    )
                },
                style: {
                    textAlign: 'center'
                },
                width: 150,
                filterable: false
            }
        ]
        return (
            <div>
                <SideNav/>
                <div style={{paddingTop:'40px',paddingLeft:'60px',paddingRight:'20px'}}>
             <div class='row '>
                <div class='col-xl-8'>
                    <p class='text' >Guardian Records</p>
                </div>

                <div class='col-xl-4' > 
                <div style={{textAlign:'right',paddingRight:'10px', paddingTop:'10px' }}>
                  <Link to='adminaddparent'>  
                  <button class='btn btn-primary' >Add Guardian</button></Link>
                </div>
                </div>
                </div>
                <div class='col-l-12 reacttable' >

<ReactTable
    columns={columns}
    data={this.state.parents}
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


export default AdminParent;