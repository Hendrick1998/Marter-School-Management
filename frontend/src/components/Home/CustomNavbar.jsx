import React, { Component } from 'react';
import { Navbar, Nav, NavItem,Button } from 'react-bootstrap';
import logo from '../../images/msm_logo.png';
export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
             <Navbar.Brand href="/" className="ml-5 mr-5">
                    <img
                        src={logo}
                        width="65"
                        height="35"
                        className="d-inline-block align-top"
                        alt="MSM Logo"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                    <NavItem>
                    <Nav.Link href="/">Home</Nav.Link>
                    </NavItem>
                       <NavItem>
                       <Nav.Link href="/profile" eventKey="2">Feature</Nav.Link>
                       </NavItem>
                        <NavItem>
                        <Nav.Link href="/about" eventKey="3">About</Nav.Link>
                        </NavItem>
                        <NavItem>
                        <Nav.Link href="/contact" className="mr-sm-2" eventKey="4">Contact Us</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Nav >                       
                        <Button variant="outline-light" className="mr-sm-2">Login</Button>
                        <Button variant="primary">Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
