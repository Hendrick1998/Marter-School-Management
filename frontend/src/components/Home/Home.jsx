import React, { Component } from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import '../Background.css';
import Navbar from './CustomNavbar';
import $ from 'jquery';

export default class Home extends Component {

    componentDidMount() {
        let navbarHeight = $('.navbar').css('height').split('px')[0];
        let windowHeight = window.screen.height / 2;
        let customNumber = 83;
        let padding  = windowHeight - navbarHeight - customNumber;
        
        $('.home-page-body').css('padding-top', padding).css('padding-bottom', padding);

    }

    render() {
        return (
            <div>
                <Navbar activeElement = "home"/>
            
                <div className="container-fluid home-page-body">
                    <div className = "home-page-info">
                        <h1 >WELCOME TO MSM SCHOOL MANAGEMENT</h1>
                        <p>
                            Cover is a one-page template for building simple and beautiful home pages.<br></br>
                            Download, edit the text, and add your own fullscreen background photo to make it your own.
                        </p>
                        <Button variant="light">Learn more</Button>
                    </div>
                </div>
            </div>
        )
    }
}