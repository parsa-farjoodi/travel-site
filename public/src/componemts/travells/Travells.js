import React from 'react'
import "./Travells.css"
import { Container, Row, Col } from 'react-bootstrap'


export default function Travells() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='travells-container' style={{ backgroundImage: "url(./img/background3.jpg)" }}>
                        <div className='space'></div>
                        <div className='content'>
                            <div className='title'>
                                <h2> Fastest Way to Compare and Book over 450 Cheap Flights</h2>
                            </div>
                            <div className='button'>
                                <button className=''>FIND YOUR FLIGHT</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
