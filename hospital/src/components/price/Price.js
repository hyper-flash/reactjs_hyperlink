import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'

export default function Price(props) {
    props.changeTitle("price");
  return (
    <div>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
                    <h1 className="display-4">Awesome Medical Programs</h1>
                </div>
                <div className="position-relative" style={{ padding: '0 45px 45px 45px' }}>
                    <Carousel>
                        <div className='row'>
                        <div className="bg-light rounded text-center col">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src={process.env.PUBLIC_URL + "img/price-1.jpg"} alt="" />
                                <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                    <h3 className="text-primary">Pregnancy Care</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top fw-normal" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>49<small className="align-bottom fw-normal" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Year</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="text-center py-5">
                                <p>Emergency Medical Treatment</p>
                                <p>Highly Experienced Doctors</p>
                                <p>Highest Success Rate</p>
                                <p>Telephone Service</p>
                                <a href="/" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                            </div>
                        </div>
                        <div className="bg-light rounded text-center col">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src="img/price-2.jpg" alt="" />
                                <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                    <h3 className="text-primary">Health Checkup</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top fw-normal" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>99<small className="align-bottom fw-normal" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Year</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="text-center py-5">
                                <p>Emergency Medical Treatment</p>
                                <p>Highly Experienced Doctors</p>
                                <p>Highest Success Rate</p>
                                <p>Telephone Service</p>
                                <a href="/" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                            </div>
                        </div>
                        <div className="bg-light rounded text-center col">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src="img/price-3.jpg" alt="" />
                                <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                    <h3 className="text-primary">Dental Care</h3>
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top fw-normal" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>149<small className="align-bottom fw-normal" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Year</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="text-center py-5">
                                <p>Emergency Medical Treatment</p>
                                <p>Highly Experienced Doctors</p>
                                <p>Highest Success Rate</p>
                                <p>Telephone Service</p>
                                <a href="/" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                            </div>
                        </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 className="display-4">Make An Appointment For Your Family</h1>
                        </div>
                        <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="/">Find Doctor</a>
                        <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="/">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Book An Appointment</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Choose Department</option>
                                            <option value="1">Department 1</option>
                                            <option value="2">Department 2</option>
                                            <option value="3">Department 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Select Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}