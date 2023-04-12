import React from 'react'
import { Container } from 'react-bootstrap'

const BannerQuiz = () => {
    return (
        <div>
            <Container className='container-bannerquiz p-3'>
                <div className='banner-quiz p-5 text-white'>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel eligendi corporis distinctio commodi officia placeat, fuga, impedit ipsa dolores provident molestias similique omnis quia dolor? Quod dolore unde quos nihil rerum porro labore aperiam.</h4>
                </div>
                <div className='d-flex mt-3 justify-between'>
                    <div>
                        <h3>Semua Kategori</h3>
                    </div>
                    <div classname=''>
                        <div className='d-flex'>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BannerQuiz