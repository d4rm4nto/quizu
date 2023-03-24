import React from 'react'
import { Link } from 'react-router-dom'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Form_Login = () => {
    return (
        <div className="container-login bg-transparent d-flex justify-cente align-items-sm-center h-screen">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card border border-slate-300 bg-transparent shadow-lg">
                            <div class="card-header text-white">
                                <h4 class="card-title mb-0 text-center">Login</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3 text-white">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Masukan Nama Pengguna" required />
                                    </div>
                                    <div class="mb-3 text-white">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Masukan Kata Sandi" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 mt-3">Masuk</button>
                                </form>
                            </div>
                            <div className="text-white text-center">
                                <hr /> Atau Masuk Menggunakan <hr />
                            </div>
                            <div className='text-center mt-3' style={{ color: "#4285F4" }}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </div>
                            <div className='text-center mt-3 mb-3 text-white'>
                                <p>Belum Mempunyai Akun ?<Link className='text-danger text-decoration-none' to="/pendaftaran"><b>Daftar Sekarang</b></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
