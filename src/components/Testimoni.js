import React from 'react'
import { useState } from 'react';
import { Container, Card, Carousel, Row, Col } from 'react-bootstrap'
import user from '../assets/img/user.avif'

const Testimoni = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Container>
                <div data-aos="fade-right">
                    <h2 className='pb-20 pt-20 text-center'>Apa yang mereka katakan mengenai Quizu ?</h2>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <Row>
                            <Col>
                                <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
                                    <Carousel.Item>
                                        <Row className="justify-content-center">
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 1</Card.Title>
                                                        <Card.Text>
                                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus magna vel ex luctus, eu accumsan massa malesuada. Etiam malesuada tincidunt sodales."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 2</Card.Title>
                                                        <Card.Text>
                                                            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed congue a mi id consequat. Sed malesuada elit at turpis semper, vel consectetur sapien dignissim."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 3</Card.Title>
                                                        <Card.Text>
                                                            "In id purus nec sapien feugiat molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lobortis tortor et mi finibus tristique."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className="justify-content-center">
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 4</Card.Title>
                                                        <Card.Text>
                                                            "Duis ornare mauris purus, eu efficitur nunc iaculis eget. Aliquam erat volutpat. Nam et augue massa. Nam mollis faucibus lacus vel volutpat."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 5</Card.Title>
                                                        <Card.Text>
                                                            "Nunc maximus eros a mauris posuere, ac ullamcorper turpis pretium. Suspendisse at est augue. Ut laoreet ipsum a risus dignissim faucibus. Praesent a lorem sed mauris porttitor molestie."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card>
                                                    <Card.Body>
                                                        <img src={user} alt="User 1" className="rounded-circle" width="64" height="64" />
                                                        <Card.Title>Testimonial 6</Card.Title>
                                                        <Card.Text>
                                                            "Nunc maximus eros a mauris posuere, ac ullamcorper turpis pretium. Suspendisse at est augue. Ut laoreet ipsum a risus dignissim faucibus. Praesent a lorem sed mauris porttitor molestie."
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Testimoni