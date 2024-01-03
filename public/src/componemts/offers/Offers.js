import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import "./Offers.css"
import { offers } from "../../datas"

export default function Offers() {
  return (
    <Container>
      <Row>
        <Col>
          <div className='container-offer'>
            <div className='offer-details'>
              <h2>Best Offers</h2>
              <p>Check out our top-rated tours</p>
            </div>
            <div className='offers'>
              {
                offers.map((offer) => (
                  <Card className='offer-content'>
                    <Card.Img variant="" className='offer-image' src={offer.img} />
                    <Card.Body>
                      <Card.Title className='offer-title'>{offer.title}</Card.Title>
                      <Card.Text className='offer-detail'>{offer.content}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }

            </div>
            <div className='offer-button'>
              <button>VIEW ALL TOURS</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
