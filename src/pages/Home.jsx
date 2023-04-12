import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Kategori from '../components/DaftarQuiz'
import NavBar from '../components/NavBar'
import Pengaduan from '../components/Pengaduan'
import Testimoni from '../components/Testimoni'
import "../style/style.css"

export const Home = () => {
  return (
    <div className='landingpage'>
      {/* intro */}
      <div className="banner z-40">
        <NavBar />
        <Banner />
      </div>
      {/* end intro */}

      {/* content landing page */}
      <div className="bg-gray-200">
        <Content />
      </div>
      {/* end content landing page */}

      {/* testimoni section */}
      <div className="testimoni bg-gray-200">
        <Testimoni />
      </div>
      {/* end testimoni */}

      {/* accordion section */}
      <div className="faq bg-gray-200">
        <Faq />
      </div>
      {/* end accordion */}

      {/* pengaduan section */}
      <div className="bg-gray-200">
        <Pengaduan />
      </div>
      {/* end pengaduan */}

      <div className="footer bg-blue-700">
        <Footer />
      </div>
    </div>
  )
}
