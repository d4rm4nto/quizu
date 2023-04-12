import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import quiz from "../assets/img/quiz.png";
import materi from "../assets/img/materi.png";
import fun from "../assets/img/fun.png";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Content = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#407BFF"
          fill-opacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,144C672,139,768,85,864,106.7C960,128,1056,224,1152,272C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Container className="content mt-5">
        <div className="mb-20">
          <h2 className="text-center">
            75% siswa yang menggunakan QuizU memberi tahu kalau mereka dapat
            nilai lebih tinggi dari biasanya.
          </h2>
        </div>
        <Row>
          <Col sm md={6}>
            <div data-aos="fade-right">
              <img src={fun} alt="logo-quiz" />
            </div>
          </Col>
          <Col sm md={6}>
            <div data-aos="fade-left">
              <div>
                <h1>Fun</h1>
              </div>
              <p>
                Jangan biarkan belajar IPA dan IPS terasa membosankan! Dengan
                metode quiz yang menyenangkan dari Quizu, kamu bisa belajar
                dengan lebih seru dan menyenangkan.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm md={6} className="">
            <div data-aos="fade-right">
              <div>
                <h1>Kurikulum Terupdate</h1>
              </div>
              <p>
                Kami di sini memiliki kemampuan untuk menyesuaikan kurikulum
                pembelajaran untuk setiap siswa secara individu agar mereka
                dapat mengikuti materi dengan lebih mudah dan efektif. Dalam
                proses ini, kami mempertimbangkan berbagai faktor seperti minat
                siswa, gaya belajar, kekuatan dan kelemahan siswa dalam memahami
                materi, dan tujuan belajar yang ingin dicapai siswa
              </p>
            </div>
          </Col>
          <Col sm md={6}>
            <div data-aos="fade-left">
              <img src={materi} alt="img-materi" />
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm md={6}>
            <div data-aos="zoom-in">
              <img src={quiz} alt="logo-quiz" />
            </div>
          </Col>
          <Col sm md={6} className="">
            <div data-aos="zoom-in-up">
              <div>
                <h1>Point</h1>
              </div>
              <p>
                Aplikasi Quizu menawarkan pengalaman belajar yang interaktif
                dengan menyediakan poin pencapaian bagi siswa setiap kali mereka
                menyelesaikan kuis. Poin pencapaian ini dapat menjadi motivasi
                bagi siswa untuk terus mengikuti kuis dan meningkatkan
                pengetahuan mereka.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#407BFF" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,256C672,288,768,288,864,266.7C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </div>
  );
};

export default Content;
