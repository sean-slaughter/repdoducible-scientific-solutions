import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import {Link} from 'react-router-dom'
import { Image } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <div>
            <Navbar className="border-bottom navbar-dark" id="navbar" expand="lg" style={{backgroundColor: "#001405"}}>
                <NavbarBrand><Image className="brand-logo" src="/logo.png" fluid/></NavbarBrand>
                <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
                <NavbarCollapse id="navbar-toggle" >
                <Nav className="ml-auto">
                    <Link className='nav-link' to="/home">Home</Link>
                    <Link className='nav-link' to="/about">About Us</Link>
                    <Link className='nav-link' to="/projects">Projects</Link>
                    <Link className='nav-link' to="/monitoringevaluation">Monitoring &amp; Evalutation</Link>
                    <Link className='nav-link' to="/publications">Publications</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </Nav>
            </NavbarCollapse>
            </Navbar>
            
        </div>
    )
}
