import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Materi = () => {
    return (
        <div>
            <Container>
                <Card className='mt-5'>
                    <div class="ratio ratio-21x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LddLOeI7hno" title="YouTube video" allowfullScreen></iframe>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            Fisika adalah ilmu yang mempelajari alam semesta dari yang terkecil hingga terbesar dan sangat penting dalam mengembangkan teknologi modern. Fisika membantu kita memahami alam semesta dan fenomena alam yang terjadi di sekitar kita, serta mengembangkan teori dan teknologi baru untuk memecahkan masalah kompleks. Pemahaman fisika yang baik sangat penting untuk menjalani kehidupan sehari-hari dan menciptakan masa depan yang lebih baik bagi manusia dan alam semesta.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Materi