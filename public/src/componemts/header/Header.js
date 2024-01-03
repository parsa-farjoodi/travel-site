import React from 'react'
import "./Header.css"
import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className='header-container' style={{ backgroundImage: "url(/img/bg.webp)" }}>
            <Navbar expand="lg" className="nav">
              <Container className='navbar'>
                <Navbar.Brand href="#home" className='logo'>Travellino</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="main-menu">
                    <Nav.Link className='nav-item' href="#home">Home</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">TOUR</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">ABOUT</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">TEAM</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">BLOG</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">GALLERY</Nav.Link>
                    <Nav.Link className='nav-item' href="#link">CONTACTS</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className='header-detail-container'>
              <div className='header-detail'>
                <div className='header-title'>
                  <h2>Enjoy Your Dream Vacation</h2>
                </div>
                <div className='header-paragraph'>
                  <p>Travel to the any corner of the world, without going around in circles.</p>
                </div>
                <div className='header-input'>
                  <input type='text' placeholder='Enter Keyword' /><button type='submit'>SEARCH</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
