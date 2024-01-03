import React from 'react'
import "./Attributes.css"
import { Container, Row, Col } from 'react-bootstrap'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaymentIcon from '@mui/icons-material/Payment';


export default function Attributes() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='attributes-container' style={{ backgroundImage: "url(./img/background2.jpg)" }}>
                        <div className='attributes'>
                            <div className='title'>
                                <h2>Why Travellino</h2>
                            </div>
                            <div className='attribute-con'>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <FormatAlignCenterIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>PERSONALIZED MATCHING</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>We can provide up to 3 experienced travel specialists who fit best.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <MilitaryTechIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>WIDE VARIETY OF DESTINATIONS</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>With Travellino, you’ll find a perfect destination among hundreds available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <ThumbUpOffAltIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>HIGHLY QUALIFIED SERVICE</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>Our high level of service is officially recognized by thousands of clients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <SupportAgentIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>24/7 SUPPORT</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>Our travel agents are always there to support you during your trip.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <DiamondIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>HANDPICKED HOTELS</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>We pick the hotels with the utmost reputation and positive reviews.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='attributes-content'>
                                    <div className='attribute'>
                                        <div className='attribute-icon'>
                                            <PaymentIcon className="icon"/>
                                        </div>
                                        <div className='attribute-title'>
                                            <h5>BEST PRICE GUARANTEE</h5>
                                        </div>
                                        <div className='attribute-detail'>
                                            <p>We guarantee you’ll get top-notch comfort at an affordable price.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
