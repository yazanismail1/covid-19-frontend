import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../styles/Header.css'

class Header extends React.Component {
  
    render() {
      return (
        <>
            <div className="header-container">
                <div className="header-text">
                    <h1>Codiv19 Statistics</h1>
                    <p>A website to provide you with all the updates on Covid-19 statistics around the world</p>
                </div>
                <div className="header-img"></div>
            </div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link><Link className='nav-item' to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className='nav-item' to="/allcountries">All Countries</Link></Nav.Link>
                        <Nav.Link><Link className='nav-item' to="/myrecords">My Records</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
        </>

      );
    }
}
    
export default Header;