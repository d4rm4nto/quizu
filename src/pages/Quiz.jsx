import React from 'react'
import NavBar from '../components/NavBar'
import DaftarQuiz from '../components/DaftarQuiz'
import "../style/style.css"
import Footer from '../components/Footer'
import BannerQuiz from '../components/BannerQuiz'


export const Quiz = () => {
    return (
        <div className='quiz-section bg-gray-200'>
            <div className='bg-gray-200'>
                {/* navbar sevction */}
                <NavBar />
                {/* end navbar section */}
            </div>

            <div className='bg-gray-200'>
                <BannerQuiz />
            </div>

            <div className='bg-gray-200'>
                {/* card quiz section */}
                <DaftarQuiz />
                {/* end daftar quiz */}
            </div>

            <div className='bg-blue-700'>
                {/* footer section */}
                <Footer />
                {/* end footer section */}
            </div>
        </div>
    )
}
