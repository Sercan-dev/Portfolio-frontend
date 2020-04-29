import React from 'react';
import '../App.css';
import * as ReactBootStrap from "react-bootstrap";


const Navbar = () => {
    return (
        <div className="Nav">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/Landingpage">Beech Way Designs</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/aboutme">About Me</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>

    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    
                
        </div>
 
    )
}


export default Navbar;
