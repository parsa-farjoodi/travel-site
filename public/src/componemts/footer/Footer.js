import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='footer-container'>
                        <div className='footer-sections'>
                            <div className='bio'>
                                <div className='title'>
                                    <h1>Travellino</h1>
                                </div>
                                <div className='biographi'>
                                    <p>Since 2002, we have been offering travel services of the highest quality, combining our energy and enthusiasm.</p>
                                </div>
                            </div>
                            <div className='contact'>
                                <div className='contact-title'>
                                    <h3>Contact Information</h3>
                                </div>
                                <div className='location'>
                                    <LocationOnIcon className='location-icon' />
                                    <span>732/21 Second Street, Tehran Street</span>
                                </div>
                                <div className='call'>
                                    <CallIcon className='call-icon' />
                                    <span>345-677-554</span>
                                </div>
                                <div className='mail'>
                                    <MailOutlineIcon className='mail-icon' />
                                    <span>Travellino@gmail.com</span>
                                </div>
                            </div>
                            <div className='social-media'>
                                <div className='title'>
                                    <h3>Follow</h3>
                                </div>
                                <div className='icons'>
                                    <a href='#' className='social-media-icon'>
                                        <InstagramIcon className='icon' />
                                    </a>
                                    <a href='#' className='social-media-icon'>
                                        <TwitterIcon className='icon' />
                                    </a>
                                    <a href='#' className='social-media-icon'>
                                        <YouTubeIcon className='icon' />
                                    </a>
                                    <a href='#' className='social-media-icon'>
                                        <LinkedInIcon className='icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
