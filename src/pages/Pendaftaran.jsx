import React from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import LogoGoogle from "../assets/img/LogoGoogle.svg";


const Pendaftaran = () => {
  return (
<<<<<<<<< Temporary merge branch 1
    <div className="container-pendaftaran backdrop-opacity-10 backdrop-invert bg-white/30">
      <Row>
        <Col sm md={5}>
          <div className="flex top-10">
            <img className="p-5 z-10" width={240} src={Logo}></img>
          </div>
        </Col>
        <Col sm md={7}>
          <div className="bg-white d-flex justify-center align-items-center w-100 h-screen rounded-start-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <div className="card-header text-balck">
                    <h4 className="card-title fw-bold mb-5 text-center">
                      Pendaftaran QuizU
                    </h4>
=========
    <div className="container-pendaftaran bg-transparent d-flex justify-cente align-items-sm-center h-screen">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card border border-slate-300 bg-transparent shadow-lg">
              <div class="card-header text-white">
                <h4 class="card-title mb-0 text-center">Registrasi</h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 text-white">
                    <label for="name" class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-control" id="username" placeholder="Masukan Nama Lenhkap" required />
>>>>>>>>> Temporary merge branch 2
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 text-black fw-semibold">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Masukkan Username"
                          required
                        />
                      </div>
                      <div className="mb-3 text-black fw-semibold">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Masukkan Email"
                          required
                        />
                      </div>
                      <div className="mb-3 text-black fw-semibold">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Masukkan Password"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mt-4 fw-bold"
                      >
                        Masuk
                      </button>
                      <div className="flex justify-center mt-2">
                        <div className="col-5">
                          <hr />
                        </div>
                        <div>
                          <p className="text-secondary mx-2">atau</p>
                        </div>
                        <div className="col-5">
                          <hr />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-outline-secondary w-100 fw-bold"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ padding: "4px" }}
                          src={LogoGoogle}
                          width={30}
                        ></img>{" "}
                        Masuk Dengan Google
                      </button>
                    </form>
                  </div>

                  <div className="text-center mt-3 mb-3 text-balck">
                    <p>
                      Belum punya akun ?
                      <Link
                        className="text-danger text-decoration-none"
                        to="/login"
                      >
                        <b className="italic"> Login</b>
                      </Link>
                    </p>
                  </div>
<<<<<<<<< Temporary merge branch 1
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
