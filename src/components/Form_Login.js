import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Logo from "../assets/img/Logo.png";
import LogoGoogle from "../assets/img/LogoGoogle.svg";

export const Form_Login = () => {
  return (
    <Row>
      <Col sm md={5}>
        <div className="flex top-10">
          <img className="p-5" width={240} src={Logo}></img>
        </div>
      </Col>
      <Col sm md={7}>
        <div className="container-login bg-white d-flex justify-cente align-items-sm-center h-screen rounded-start-4">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-7  ">
                <div className="card-header text-balck">
                  <h4 className="card-title fw-bold mb-5 text-center">
                    Login QuizU
                  </h4>
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
                        placeholder="Masukan Username"
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
                        placeholder="Masukan Password"
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
                      to="/pendaftaran"
                    >
                      <b className="italic"> Daftar</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
