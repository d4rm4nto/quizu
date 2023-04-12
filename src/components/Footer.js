import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoQuizzU from "../assets/img/LogoQuizU.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E5E7EB"
          fill-opacity="1"
          d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,197.3C672,213,768,171,864,176C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Container className="">
        <Row>
          <Col sm md={6}>
            <div className="">
              <img
                className="w-20 h-30 text-gray-300"
                src={LogoQuizzU}
                alt="logo-quiz"
              />
            </div>
            <div className="mt-5 pb-10 text-gray-300">
              QuizU adalah sebuah platform pembelajaran interaktif untuk siswa
              SMA/SMK yang menyediakan bank soal, latihan, dan fitur pelacakan
              kemajuan. Dengan QuizU, siswa dapat belajar dengan cara yang lebih
              menyenangkan dan efektif.
            </div>
          </Col>
          <Col sm md={3}>
            <h5>Get Started</h5>
            <h6>Mulai</h6>
            <h6>Menuju Quiz</h6>
          </Col>
          <Col sm md={3}>
            <h5>Kontak Kami</h5>
            <div className="mt-5 text-gray-300">
              <p>quizU@gmail.com</p>
              <p>quizu</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
