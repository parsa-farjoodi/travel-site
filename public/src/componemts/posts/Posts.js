import React from 'react'
import "./Posts.css"
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { posts } from "../../datas"

export default function Posts() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='posts-container'>
                        <div className='posts-title'>
                            <h2>Recent Posts</h2>
                        </div>
                        <div className='posts'>
                            {posts.map((post) => (
                                <Card className="text-center card-post">
                                    <Card.Header style={{ border: "none" }}><img src={post.img} className='post-img' /></Card.Header>
                                    <Card.Body className='post-body'>
                                        <Card.Title className='post-title'>{post.title}</Card.Title>
                                        <div className='card-date'>
                                            <span>Posted by <a href='#'>{post.author}</a> Comments: <a href='#'>{post.comment}</a></span>
                                        </div>
                                        <Card.Text className='card-text'>{post.explaination}</Card.Text>
                                        <Button className='post-button'>READ MORE</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                            {/* <Card className="text-center card-post">
                                <Card.Header style={{ border: "none" }}><img src='./img/offer-4.jpg' className='post-img' /></Card.Header>
                                <Card.Body className='post-body'>
                                    <Card.Title className='post-title'>Planning a Trip</Card.Title>
                                    <div className='card-date'>
                                        <span>Posted by <a href='#'>admin-08.13.2023</a> Comments: <a href='#'>0</a></span>
                                    </div>
                                    <Card.Text className='card-text'>
                                        When you need your company to have a new website or if you venture on updating your…
                                    </Card.Text>
                                    <Button className='post-button'>READ MORE</Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center card-post">
                                <Card.Header style={{ border: "none" }}><img src='./img/offer-4.jpg' className='post-img' /></Card.Header>
                                <Card.Body className='post-body'>
                                    <Card.Title className='post-title'>Planning a Trip</Card.Title>
                                    <div className='card-date'>
                                        <span>Posted by <a href='#'>admin-08.13.2023</a> Comments: <a href='#'>0</a></span>
                                    </div>
                                    <Card.Text className='card-text'>
                                        When you need your company to have a new website or if you venture on updating your…
                                    </Card.Text>
                                    <Button className='post-button'>READ MORE</Button>
                                </Card.Body>
                            </Card> */}

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
