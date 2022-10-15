import React from 'react'
import { Link } from "react-router-dom";

export default function Header(props) {
   return (
      <>
         <header>
            <div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="/"><img src={process.env.PUBLIC_URL + "images/logo.png"} alt="/" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarsExample04">
                              <ul className="navbar-nav mr-auto">
                                 <li className={`nav-item ${props.selectedTitle === "home" ? "active" : ""}`}>
                                    <Link className="nav-link" to="/">Home</Link>
                                 </li>
                                 <li className={`"nav-item" ${props.selectedTitle === "about" ? "active" : ""}`}>
                                    <Link className="nav-link" to="/about">About</Link>
                                 </li>
                                 <li className={`"nav-item" ${props.selectedTitle === "we-do" ? "active" : ""}`}>
                                    <Link className="nav-link" to="/we-do">What we do</Link>
                                 </li>
                                 <li className={`"nav-item" ${props.selectedTitle === "pricing" ? "active" : ""}`}>
                                    <Link className="nav-link" to="/pricing">Pricing</Link>
                                 </li>
                                 <li className={`"nav-item" ${props.selectedTitle === "contact" ? "active" : ""}`}>
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                     <div className="col-md-2">
                        <ul className="social_icon">
                           <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}
