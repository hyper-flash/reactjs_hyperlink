import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Header(props) {
    return (
        <>
        <div className="container-fluid py-2 border-bottom d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-decoration-none text-body pe-3" href="/"><i className="bi bi-telephone me-2"></i>+012 345 6789</a>
                            <span className="text-body">|</span>
                            <a className="text-decoration-none text-body px-3" href="/"><i className="bi bi-envelope me-2"></i>info@example.com</a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-body px-2" href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-body px-2" href="https://twitter.com/i/flow/login">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-body px-2" href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid=14650114788_asid=127961666300_crid=545833659301_kw=linkedin%20login_d=c_tid=kwd-12704335873_n=g_mt=e_geo=9061733_slid=&mcid=6844056167778418689&cid=&gclid=EAIaIQobChMI7feq0r-y-gIVk30rCh1Dyw41EAAYASAAEgIt7_D_BwE&gclsrc=aw.ds">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-body px-2" href="https://www.instagram.com/accounts/login/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-body ps-2" href="https://youtube.com/signin">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className= {`nav-item nav-link ${props.selectedTitle === "home" ? "active" : ""}`}>Home</Link>
                            <Link to="/about" className={`nav-item nav-link ${props.selectedTitle === "about" ? "active" : ""}`}>About</Link>
                            <Link to="/service" className={`nav-item nav-link ${props.selectedTitle === "service" ? "active" : ""}`}>Service</Link>
                            <Link to="/price" className={`nav-item nav-link ${props.selectedTitle === "price" ? "active" : ""}`}>Pricing</Link>
                            <div className="nav-item dropdown">
                                <a href="/" className={`nav-link dropdown-toggle ${props.selectedTitle === "blog" || props.selectedTitle === "detail" || props.selectedTitle === "team" || props.selectedTitle === "appointment" || props.selectedTitle === "search" ? "active" : ""}`} data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <Link to="/blog" className={`dropdown-item ${props.selectedTitle === "blog" ? "active" : ""}`}>Blog Grid</Link>
                                    <Link to="/detail" className={`dropdown-item ${props.selectedTitle === "detail" ? "active" : ""}`}>Blog Detail</Link>
                                    <Link to="/team" className={`dropdown-item ${props.selectedTitle === "team" ? "active" : ""}`}>The Team</Link>
                                    <Link to="/appointment" className={`dropdown-item ${props.selectedTitle === "appointment" ? "active" : ""}`}>Appointment</Link>
                                    <Link to="/search" className={`dropdown-item ${props.selectedTitle === "search" ? "active" : ""}`}>Search</Link>
                                </div>
                            </div>
                            <Link to="/contact" className={`nav-item nav-link ${props.selectedTitle === "contact" ? "active" : ""}`}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <Helmet>
            <script>{`
                $(function() {
                    function toggleNavbarMethod() {
                        if ($(window).width() > 992) {
                            $('.navbar .dropdown').on('mouseover', function () {
                                $('.dropdown-toggle', this).trigger('click');
                            }).on('mouseout', function () {
                                $('.dropdown-toggle', this).trigger('click').blur();
                            });
                        } else {
                            $('.navbar .dropdown').off('mouseover').off('mouseout');
                        }
                    }
                    toggleNavbarMethod();
                    $(window).resize(toggleNavbarMethod);
                });
            `}</script>
        </Helmet>

        </>
    )
}
