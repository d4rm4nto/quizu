import React from 'react'
import NavBar from '../components/NavBar'
import BannerQuiz from '../components/BannerQuiz'
import DaftarQuiz from '../components/DaftarQuiz'
import Footer from '../components/Footer'


export const Quiz = () => {
    return (
        <div className='bg-slate-200'>

            <div>
                <NavBar />
            </div>

            <div>
                <BannerQuiz />
            </div>

            <div>
                <DaftarQuiz />
            </div>

            <div className='bg-blue-700'>
                <Footer />
            </div>


        </div>
    )
}
