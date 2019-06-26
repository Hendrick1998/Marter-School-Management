import React,{Component} from 'react';
import Navbar from './CustomNavbar';
export default class ContactUs extends Component{
    render(){
        return(
            <div>
                <Navbar activeElement = "contact-us"/>
                <h1 className="cover-heading">Contact Us</h1>
            </div>
        )
    }
    }