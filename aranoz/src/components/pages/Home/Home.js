import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div>
            <div>
                {/* banner part start*/}
                <section className="banner_part">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="banner_slider owl-carousel">
                                    <div className="single_banner_slider">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-8">
                                                <div className="banner_text">
                                                    <div className="banner_text_iner">
                                                        <h1>Wood &amp; Cloth
                                                            Sofa</h1>
                                                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                            suspendisse ultrices gravida. Risus commodo viverra</p>
                                                        <a href="/" className="btn_2">buy now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="banner_img d-none d-lg-block">
                                                <img src="img/banner_img.png" alt="" />
                                            </div>
                                        </div>
                                    </div><div className="single_banner_slider">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-8">
                                                <div className="banner_text">
                                                    <div className="banner_text_iner">
                                                        <h1>Cloth &amp; Wood
                                                            Sofa</h1>
                                                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                            suspendisse ultrices gravida. Risus commodo viverra</p>
                                                        <a href="/" className="btn_2">buy now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="banner_img d-none d-lg-block">
                                                <img src="img/banner_img.png" alt="" />
                                            </div>
                                        </div>
                                    </div><div className="single_banner_slider">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-8">
                                                <div className="banner_text">
                                                    <div className="banner_text_iner">
                                                        <h1>Wood &amp; Cloth
                                                            Sofa</h1>
                                                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                            suspendisse ultrices gravida. Risus commodo viverra</p>
                                                        <a href="/" className="btn_2">buy now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="banner_img d-none d-lg-block">
                                                <img src="img/banner_img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="single_banner_slider">
                      <div class="row">
                          <div class="col-lg-5 col-md-8">
                              <div class="banner_text">
                                  <div class="banner_text_iner">
                                      <h1>Cloth $ Wood Sofa</h1>
                                      <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                          suspendisse ultrices gravida. Risus commodo viverra</p>
                                      <a href="/" class="btn_2">buy now</a>
                                  </div>
                              </div>
                          </div>
                          <div class="banner_img d-none d-lg-block">
                              <img src="img/banner_img.png" alt="">
                          </div>
                      </div>
                  </div> */}
                                </div>
                                <div className="slider-counter" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner part start*/}
                {/* feature_part start*/}
                <section className="feature_part padding_top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section_tittle text-center">
                                    <h2>Featured Category</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-7 col-sm-6">
                                <div className="single_feature_post_text">
                                    <p>Premium Quality</p>
                                    <h3>Latest foam Sofa</h3>
                                    <a href="/" className="feature_btn">EXPLORE NOW <i className="fas fa-play" /></a>
                                    <img src="img/feature/feature_1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <div className="single_feature_post_text">
                                    <p>Premium Quality</p>
                                    <h3>Latest foam Sofa</h3>
                                    <a href="/" className="feature_btn">EXPLORE NOW <i className="fas fa-play" /></a>
                                    <img src="img/feature/feature_2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <div className="single_feature_post_text">
                                    <p>Premium Quality</p>
                                    <h3>Latest foam Sofa</h3>
                                    <a href="/" className="feature_btn">EXPLORE NOW <i className="fas fa-play" /></a>
                                    <img src="img/feature/feature_3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                                <div className="single_feature_post_text">
                                    <p>Premium Quality</p>
                                    <h3>Latest foam Sofa</h3>
                                    <a href="/" className="feature_btn">EXPLORE NOW <i className="fas fa-play" /></a>
                                    <img src="img/feature/feature_4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* upcoming_event part start*/}
                {/* product_list start*/}
                <section className="product_list section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section_tittle text-center">
                                    <h2>awesome <span>shop</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product_list_slider owl-carousel">
                                    <div className="single_product_list_slider">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_1.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_2.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_3.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_4.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_5.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_6.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_7.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_8.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_product_list_slider">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_1.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_2.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_3.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_4.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_5.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_6.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_7.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="single_product_item">
                                                    <img src="img/product/product_8.png" alt="" />
                                                    <div className="single_product_text">
                                                        <h4>Quartz Belt Watch</h4>
                                                        <h3>$150.00</h3>
                                                        <a href="/" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product_list part start*/}
                {/* awesome_shop start*/}
                <section className="our_offer section_padding">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6">
                                <div className="offer_img">
                                    <img src="img/offer_img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="offer_text">
                                    <h2>Weekly Sale on
                                        60% Off All Products</h2>
                                    <div className="date_countdown">
                                        <div id="timer">
                                            <div id="days" className="date" />
                                            <div id="hours" className="date" />
                                            <div id="minutes" className="date" />
                                            <div id="seconds" className="date" />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <a href="/" className="input-group-text btn_2" id="basic-addon2">book now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* awesome_shop part start*/}
                {/* product_list part start*/}
                <section className="product_list best_seller section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section_tittle text-center">
                                    <h2>Best Sellers <span>shop</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-12">
                                <div className="best_product_slider owl-carousel">
                                    <div className="single_product_item">
                                        <img src="img/product/product_1.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                        </div>
                                    </div>
                                    <div className="single_product_item">
                                        <img src="img/product/product_2.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                        </div>
                                    </div>
                                    <div className="single_product_item">
                                        <img src="img/product/product_3.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                        </div>
                                    </div>
                                    <div className="single_product_item">
                                        <img src="img/product/product_4.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                        </div>
                                    </div>
                                    <div className="single_product_item">
                                        <img src="img/product/product_5.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product_list part end*/}
                {/* subscribe_area part start*/}
                <section className="subscribe_area section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="subscribe_area_text text-center">
                                    <h5>Join Our Newsletter</h5>
                                    <h2>Subscribe to get Updated
                                        with new offers</h2>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <a href="/" className="input-group-text btn_2" id="basic-addon2">subscribe now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*::subscribe_area part end::*/}
                {/* subscribe_area part start*/}
                <section className="client_logo padding_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_1.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_2.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_3.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_4.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_5.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_3.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_1.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_2.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_3.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*::subscribe_area part end::*/}
            </div>

            <Helmet>
                <script>{`
                    (function ($) {
                        "use strict";
                      
                        $('.popup-youtube, .popup-vimeo').magnificPopup({
                          // disableOn: 700,
                          type: 'iframe',
                          mainClass: 'mfp-fade',
                          removalDelay: 160,
                          preloader: false,
                          fixedContentPos: false
                        });
                      
                      
                      
                        var review = $('.textimonial_iner');
                        if (review.length) {
                          review.owlCarousel({
                            items: 1,
                            loop: true,
                            dots: true,
                            autoplay: true,
                            autoplayHoverPause: true,
                            autoplayTimeout: 5000,
                            nav: false,
                            responsive: {
                              0: {
                                margin: 15,
                      
                              },
                              600: {
                                margin: 10,
                              },
                              1000: {
                                margin: 10,
                              }
                            }
                          });
                        }
                        var best_product_slider = $('.best_product_slider');
                        if (best_product_slider.length) {
                          best_product_slider.owlCarousel({
                            items: 4,
                            loop: true,
                            dots: false,
                            autoplay: true,
                            autoplayHoverPause: true,
                            autoplayTimeout: 5000,
                            nav: true,
                            navText: ["next", "previous"],
                            responsive: {
                              0: {
                                margin: 15,
                                items: 1,
                                nav: false
                              },
                              576: {
                                margin: 15,
                                items: 2,
                                nav: false
                              },
                              768: {
                                margin: 30,
                                items: 3,
                                nav: true
                              },
                              991: {
                                margin: 30,
                                items: 4,
                                nav: true
                              }
                            }
                          });
                        }
                      
                        //product list slider
                        var product_list_slider = $('.product_list_slider');
                        if (product_list_slider.length) {
                          product_list_slider.owlCarousel({
                            items: 1,
                            loop: true,
                            dots: false,
                            autoplay: true,
                            autoplayHoverPause: true,
                            autoplayTimeout: 5000,
                            nav: true,
                            navText: ["next", "previous"],
                            smartSpeed: 1000,
                            responsive: {
                              0: {
                                margin: 15,
                                nav: false,
                                items: 1
                              },
                              600: {
                                margin: 15,
                                items: 1,
                                nav: false
                              },
                              768: {
                                margin: 30,
                                nav: true,
                                items: 1
                              }
                            }
                          });
                        }
                      
                        if ($('.img-gal').length > 0) {
                          $('.img-gal').magnificPopup({
                            type: 'image',
                            gallery: {
                              enabled: true
                            }
                          });
                        }
                      
                      
                        //single banner slider
                        $('.banner_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
                          function pad2(number) {
                            return (number < 10 ? '0' : '') + number
                          }
                          var carousel = e.relatedTarget;
                          $('.slider-counter').text(pad2(carousel.current()));
                      
                        }).owlCarousel({
                          items: 1,
                          loop: true,
                          dots: false,
                          autoplay: true,
                          autoplayHoverPause: true,
                          autoplayTimeout: 5000,
                          nav: true,
                          navText: ["next", "previous"],
                          smartSpeed: 1000,
                          responsive: {
                            0: {
                              nav: false
                            },
                            600: {
                              nav: false
                            },
                            768: {
                              nav: true
                            }
                          }
                        });
                      
                      
                      
                        // niceSelect js code
                        $(document).ready(function () {
                          $('select').niceSelect();
                        });
                      
                      
                        $('.counter').counterUp({
                          time: 2000
                        });
                      
                        $('.slider').slick({
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: false,
                          speed: 300,
                          infinite: true,
                          asNavFor: '.slider-nav-thumbnails',
                          autoplay: true,
                          pauseOnFocus: true,
                          dots: true,
                        });
                      
                        $('.slider-nav-thumbnails').slick({
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          asNavFor: '.slider',
                          focusOnSelect: true,
                          infinite: true,
                          prevArrow: false,
                          nextArrow: false,
                          centerMode: true,
                          responsive: [{
                            breakpoint: 480,
                            settings: {
                              centerMode: false,
                            }
                          }]
                        });
                      
                        //------- makeTimer js --------//  
                        function makeTimer() {
                      
                          //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
                          var endTime = new Date("30 Oct 2022 23:00:00 GMT+01:00");
                          endTime = (Date.parse(endTime) / 1000);
                      
                          var now = new Date();
                          now = (Date.parse(now) / 1000);
                      
                          var timeLeft = endTime - now;
                      
                          var days = Math.floor(timeLeft / 86400);
                          var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                          var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                          var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
                      
                          if (hours < "10") {
                            hours = "0" + hours;
                          }
                          if (minutes < "10") {
                            minutes = "0" + minutes;
                          }
                          if (seconds < "10") {
                            seconds = "0" + seconds;
                          }
                      
                          $("#days").html("<span>Days</span>" + days);
                          $("#hours").html("<span>Hours</span>" + hours);
                          $("#minutes").html("<span>Minutes</span>" + minutes);
                          $("#seconds").html("<span>Seconds</span>" + seconds);
                      
                        }
                      // click counter js
                      (function() {
                       
                        window.inputNumber = function(el) {
                      
                          var min = el.attr('min') || false;
                          var max = el.attr('max') || false;
                      
                          var els = {};
                      
                          els.dec = el.prev();
                          els.inc = el.next();
                      
                          el.each(function() {
                            init($(this));
                          });
                      
                          function init(el) {
                      
                            els.dec.on('click', decrement);
                            els.inc.on('click', increment);
                      
                            function decrement() {
                              var value = el[0].value;
                              value--;
                              if(!min || value >= min) {
                                el[0].value = value;
                              }
                            }
                      
                            function increment() {
                              var value = el[0].value;
                              value++;
                              if(!max || value <= max) {
                                el[0].value = value++;
                              }
                            }
                          }
                        }
                      })();
                      
                      inputNumber($('.input-number'));
                      
                      
                      
                        setInterval(function () {
                          makeTimer();
                        }, 1000);
                      
                        // click counter js
                      
                      
                        // var a = 0;
                        // $('.increase').on('click', function(){
                           
                          
                      
                        //   console.log(  $(this).innerHTML='Product Count: '+ a++ );
                        // });
                      
                       var product_overview = $('#vertical');
                       if(product_overview.length){
                        product_overview.lightSlider({
                          gallery:true,
                          item:1,
                          vertical:true,
                          verticalHeight:450,
                          thumbItem:3,
                          slideMargin:0,
                          speed:600,
                          autoplay: true,
                          responsive : [
                            {
                                breakpoint:991,
                                settings: {
                                    item:1,
                                    
                                  }
                            },
                            {
                                breakpoint:576,
                                settings: {
                                    item:1,
                                    slideMove:1,
                                    verticalHeight:350,
                                  }
                            }
                        ]
                        });  
                       }
                      }(jQuery));
                `}</script>
            </Helmet>


        </div>
    )
}
