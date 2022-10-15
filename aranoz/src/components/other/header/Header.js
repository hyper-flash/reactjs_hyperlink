import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div>
            <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/"> <img src="img/logo.png" alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href={() => false} id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Shop
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <Link className="dropdown-item" to="/category"> shop category</Link>
                                                <Link className="dropdown-item" to="/single-product">product details</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href={() => false} id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  pages
                                                </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                <Link className="dropdown-item" to="/login"> login</Link>
                                                <Link className="dropdown-item" to="/tracking">tracking</Link>
                                                <Link className="dropdown-item" to="/checkout">product checkout</Link>
                                                <Link className="dropdown-item" to="/cart">shopping cart</Link>
                                                <Link className="dropdown-item" to="/confirmation">confirmation</Link>
                                                <Link className="dropdown-item" to="/elements">elements</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href={() => false} id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                <Link className="dropdown-item" to="/blog"> blog</Link>
                                                <Link className="dropdown-item" to="/single-blog">Single blog</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hearer_icon d-flex">
                                    <a id="search_1" href={() => false}><i className="ti-search" /></a>
                                    <a href={() => false}><i className="ti-heart" /></a>
                                    <div className="dropdown cart">
                                        <a className="dropdown-toggle" href={"!#"} id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-cart-plus" />
                                        </a>
                                        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <div class="single_product">
                    
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between search-inner">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn"></button>
                            <span className="ti-close" id="close_search" title="Close Search" />
                        </form>
                    </div>
                </div>
            </header>


                       
            <Helmet>
            {/* <script src="%PUBLIC_URL%/js/stellar.js" />
            <script src="%PUBLIC_URL%/js/price_rangs.js" /> */}
                <script>{`
                
                $(function() {
                  
                    $("#search_input_box").hide();
                    $("#search_1").on("click", function () {
                        $("#search_input_box").slideToggle();
                        $("#search_input").focus();
                    });
                    $("#close_search").on("click", function () {
                        $('#search_input_box').slideUp(500);
                    });
                  
                  });
            `}</script>
            </Helmet>
        </div>



    )
}
