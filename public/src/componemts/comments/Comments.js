import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Comments.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Container, Row, Col } from 'react-bootstrap';
import { customers } from '../../datas';

export default function Comments() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='comments-container'>
                        <div className='comments-detail'>
                            <div className='title'>
                                <h2>What Customers Say</h2>
                            </div>
                            <div className='detail'>
                                <p>Our clients’ testimonials are the best proof of our high level of service</p>
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {customers.map((customer) => (
                                <SwiperSlide>
                                    <div className='swiper-img'>
                                        <img src={customer.img} />
                                    </div>
                                    <div className='customer-name'>
                                        <h3>{customer.name}</h3>
                                    </div>
                                    <div className='customer-say'>
                                        <p>{customer.comment}</p>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}