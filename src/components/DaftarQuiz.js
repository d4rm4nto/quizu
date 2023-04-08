import React from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'
import geografi from '../assets/img/geografi.jpg'
import ekonomi from '../assets/img/ekonomi.jpg'
import fisika from '../assets/img/fisika.jpg'
import matematika from '../assets/img/matematika.jpg'
import { Link } from 'react-router-dom'


const Kategori = () => {
    return (
        <div>
            <Container>
                <Row className='pb-5 pt-5'>
                    <h3>Geografi</h3>
                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={geografi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button><Link className='text-white' to='/MateriQuiz'>Main Quiz</Link></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={geografi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={geografi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={geografi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                <Row className='pb-5 pt-5'>
                    <h3>Ekonomi</h3>
                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={ekonomi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={ekonomi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={ekonomi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={ekonomi} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                <Row className='pb-5 pt-5'>
                    <h3>Matematika</h3>
                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={matematika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={matematika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={matematika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={matematika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                <Row className='pb-5 pt-5'>
                    <h3>Fisika</h3>
                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={fisika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={fisika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={fisika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm md={3}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" src={fisika} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className='text-end'>
                                    <Button>Main Quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Kategori