import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Menubar = () => {
    return (
        <div className='container'>
            <Navbar className="pt-4" expand="lg">
                <Link to="/home"><img style={{height:'55px'}} className="img-fluid" src={logo} alt=""/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link menu-link" to="/home">Home</Link>
                        <Link className="nav-link menu-link" to="/order">Our Portfolio</Link>
                        <Link className="nav-link menu-link" to="/adminLogin">Admin Login</Link>
                        <Link className="nav-link menu-link" to="/contact">Contact Us</Link>
                    </Nav>
                    <Link className='ml-2' to='/login'><button className=' btn-brand'>Login</button></Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;