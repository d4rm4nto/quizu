import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const TombolActionbtm = () => {
    return (
        <div className="mt-5 backdrop-blur-sm bg-black/30">
            <Container>
                <div className='h-24 d-flex justify-between pt-8'>
                    <div>
                        <button><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                    </div>
                    <div>
                        <h3>Judul Materi</h3>
                    </div>
                    <div>
                        <Link to="/SoalQuiz"><button><span class="carousel-control-next-icon" aria-hidden="true"></span></button></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TombolActionbtm
