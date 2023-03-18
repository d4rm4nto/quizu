import NavBar from './components/NavBar';
import Banner from './components/Banner';
import "./style/style.css"
import Content from './components/Content';
import Kategori from './components/Kategori';
import Footer from './components/Footer';
import Testimoni from './components/Testimoni';
import Faq from './components/Faq';
import Pengaduan from './components/Pengaduan';




function App() {
  return (
    <div className='landingpage'>
      {/* intro */}
      <div className="banner z-40">
        <NavBar />
        <Banner />
      </div>
      {/* end intro */}

      {/* content landing page */}
      <div className="">
        <Content />
      </div>
      {/* end content landing page */}

      {/* kategori section */}
      <div className="kategori">
        <Kategori />
      </div>
      {/* end kategori section */}

      {/* testimoni section */}
      <div className="testimoni">
        <Testimoni />
      </div>
      {/* end testimoni */}

      {/* accordion section */}
      <div className="faq">
        <Faq />
      </div>
      {/* end accordion */}

      {/* pengaduan section */}
      <Pengaduan />
      {/* end pengaduan */}

      <div className="footer bg-blue-700">
        <Footer />
      </div>
    </div>
  );
}

export default App;
