import React,{Component} from 'react';
import Navbar from './CustomNavbar';
export default class About extends Component{
    render(){
        return(
            <div>
             <Navbar activeElement = "about"/>
                <h1 className="cover-heading">About</h1>
                
            </div>
        )
    }
    }