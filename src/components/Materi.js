import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Materi = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Img variant="top" src="../assets/videos/video.mp4" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Materi