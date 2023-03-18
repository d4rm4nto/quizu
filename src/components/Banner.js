import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import banner from '../assets/img/banner.png'





const Banner = () => {
    return (
        <Container className="banner mt-5 pt-2 pb-5">
            <Row>
                <Col sm md={6}>
                    <div className="banner-kontent text-white">
                        <div>
                            <h1>Metode Pembelajaran dan Quiz Terbaru.</h1>
                        </div>
                        <div className='mt-5 text-gray-200'>
                            <p>Siap menguji pengetahuanmu dalam IPA dan IPS dengan metode pembelajaran baru? Ayo ikuti kuis kami sekarang juga!</p>
                        </div>
                        <div className='btn-banner mt-5'>
                            <Button>Daftar Sekarang</Button>
                        </div>
                    </div>
                </Col>
                <Col sm md={6}>
                    <div className='img-banner mt-10'>
                        <img src={banner} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner