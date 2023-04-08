import React from 'react'
import { Link } from 'react-router-dom'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Pendaftaran = () => {
  return (
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
                  </div>

                  <div class="mb-3 text-white">
                    <label for="email" class="form-label">Masukan Email Anda</label>
                    <input type="email" class="form-control" id="username" placeholder="Masukan Alamat Email" required />
                  </div>

                  <div class="mb-3 text-white">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Masukan Kata Sandi" required />
                  </div>

                  <button type="submit" class="btn btn-primary w-100 mt-3">Daftar</button>
                </form>
              </div>
              <div className="text-white text-center">
                <hr /> Atau Daftar Menggunakan <hr />
              </div>
              <div className='text-center mt-3' style={{ color: "#4285F4" }}>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className='text-center mt-3 mb-3 text-white'>
                <p>Sudah Mempunyai Akun ?<Link className='text-danger text-decoration-none' to="/login"><b>Masuk Sekarang</b></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
