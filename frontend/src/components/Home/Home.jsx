import React, { Component } from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import '../Background.css';
import Navbar from './CustomNavbar';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Jumbotron className="lead " style={{color:'#fff'}}  fluid>
                <Container style={{textAlign:'center'}}>
                <h1 >WELCOME TO MSM SCHOOL MANAGEMENT</h1>
                    <p>Cover is a one-page template for building simple and beautiful home pages.<br></br>
                        Download, edit the text, and add your own fullscreen background photo to make it your own.
                    </p>
                    <Button variant="light">Learn more</Button>
                </Container> 
                </Jumbotron>
            </div>
        )
    }
}