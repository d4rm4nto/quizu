import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Pengaduan = () => {
    return (
        <div className='text-center mb-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#407BFF" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,224C960,224,1056,192,1152,202.7C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <Container>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <h2 className='mb-10'>Ada Kendala atau masukan? Sampaikan ke kami.</h2>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Anda" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Nama Lengkap" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Control as="textarea" placeholder="Kendala & Masukan" rows={3} cols={50} />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Kirim Masukan
                        </Button>
                    </Form>
                </div >
            </Container>
        </div>
    )
}

export default Pengaduan