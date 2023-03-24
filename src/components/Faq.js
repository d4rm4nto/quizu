import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

const Faq = () => {
    return (
        <div className='pt-40 pb-20'>
            <Container classname=''>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <h2 className='pb-20 pt-20 text-center'>Apa Yang sering ditanyakan ?</h2>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Apa itu aplikasi Quizu ?</Accordion.Header>
                            <Accordion.Body>
                                Aplikasi Quizu Online IPA dan IPS adalah sebuah aplikasi untuk membantu siswa SMA dalam mengasah kemampuan dalam bidang IPA (Ilmu Pengetahuan Alam) dan IPS (Ilmu Pengetahuan Sosial) melalui kuis-kuis interaktif.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Apa saja fitur yang tersedia dalam aplikasi ini?</Accordion.Header>
                            <Accordion.Body>
                                <ol type="a">
                                    <li>1. Kuis-kuis interaktif yang tersedia dalam berbagai tingkatan kesulitan dan bidang studi yang berbeda.</li>
                                    <li>2. Laporan hasil kuis yang memberikan informasi tentang skor, jawaban yang benar/salah, dan waktu yang dibutuhkan untuk menyelesaikan kuis.</li>
                                    <li>3. Materi pembelajaran dalam bentuk video atau rangkuman yang dapat diakses secara online.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Bagaimana cara mendaftar di aplikasi Quizu Online IPA dan IPS?</Accordion.Header>
                            <Accordion.Body>
                                Untuk mendaftar di aplikasi ini, Anda perlu mengisi formulir pendaftaran yang tersedia di aplikasi atau situs web resminya. Setelah itu, Anda akan mendapatkan akun yang dapat digunakan untuk masuk ke aplikasi dan mengakses berbagai fiturnya
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Apakah aplikasi Quiz Online IPA dan IPS berbayar?</Accordion.Header>
                            <Accordion.Body>
                                Ya, setiap kuis memiliki batasan waktu yang berbeda-beda tergantung pada tingkat kesulitannya. Batasan waktu ini biasanya mencakup rentang waktu antara 30 detik hingga 10 menit.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Bagaimana cara melaporkan masalah atau memberikan feedback tentang aplikasi Quiz ?</Accordion.Header>
                            <Accordion.Body>
                                Anda dapat melaporkan masalah atau memberikan feedback tentang aplikasi ini melalui fitur bantuan yang tersedia di dalam aplikasi atau melalui email ke alamat yang tertera di situs web resminya.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </Container>
        </div>
    )
}

export default Faq