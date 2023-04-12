import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const TombolActiontop = () => {
    return (
        <div className="backdrop-blur-sm bg-black/30">
            <Container>
                <div className='h-24 d-flex justify-between pt-8'>
                    <div>
                        <Link to="/Quiz"><button><span class="carousel-control-prev-icon" aria-hidden="true"></span></button></Link>
                    </div>
                    <div>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TombolActiontop