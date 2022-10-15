import React from 'react'

export default function Home(props) {
    props.changeTitle("home");
    return (
        <>
            <div>
                <section className="banner_main">
                    <div id="myCarousel" className="carousel slide banner1" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="carousel-caption relative">
                                        <div className="row d_flex">
                                            <div className="col-md-6">
                                                <img className="bann_img" src={process.env.PUBLIC_URL + 'images/banner_ing.jpg'} alt="#" />
                                            </div>
                                            <div className="col-md-6">
                                                <span>01/03</span>
                                                <h1>Milina nail Salon Creating Beauty</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                                <a className="get_btn" href="/" role="button">Get Appoinment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="carousel-caption relative">
                                        <div className="row d_flex">
                                            <div className="col-md-6">
                                                <img className="bann_img" src={process.env.PUBLIC_URL + "images/banner_ing.jpg"} alt="#" />
                                            </div>
                                            <div className="col-md-6">
                                                <span>02/03</span>
                                                <h1>Milina nail Salon Creating Beauty</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                                <a className="get_btn" href="/" role="button">Get Appoinment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="carousel-caption relative">
                                        <div className="row d_flex">
                                            <div className="col-md-6">
                                                <img className="bann_img" src={process.env.PUBLIC_URL + "images/banner_ing.jpg"} alt="#" />
                                            </div>
                                            <div className="col-md-6">
                                                <span>03/03</span>
                                                <h1>Milina nail Salon Creating Beauty</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                                <a className="get_btn" href="/" role="button">Get Appoinment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* end banner */}
                {/* what we do  */}
                <div className="we_do slin">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>What We Do </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-12">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src={process.env.PUBLIC_URL + "images/weicon1.png"} alt="#" /></i>
                                            <h3>Nail Art</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src={process.env.PUBLIC_URL + "images/weicon2.png"} alt="#" /></i>
                                            <h3>Manicure</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src={process.env.PUBLIC_URL + "images/weicon3.png"} alt="#" /></i>
                                            <h3>Pedicure</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src={process.env.PUBLIC_URL + "images/weicon4.png"} alt="#" /></i>
                                            <h3>Paraffin wax</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about slin2">
                    <div className="container">
                        <div className="row d_flex">
                            <div className="col-md-6">
                                <div className="titlepage">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <a className="read_more" href="/"> Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_img">
                                    <figure><img src={process.env.PUBLIC_URL + "images/about.png"} alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing slin">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Our Pricing</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing_box">
                                    <div className="pricing_box_ti">
                                        <h3> <span>$</span>20<strong>/one Day</strong></h3>
                                    </div>
                                    <div className="our_pricing">
                                        <span>Regular</span>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                    </div>
                                </div>
                                <a className="read_more mar_top" href="/"> Book Now</a>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_box">
                                    <div className="pricing_box_ti">
                                        <h3> <span>$</span>30<strong>/one Day</strong></h3>
                                    </div>
                                    <div className="our_pricing">
                                        <span>Standard</span>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                    </div>
                                </div>
                                <a className="read_more mar_top" href="/"> Book Now</a>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_box">
                                    <div className="pricing_box_ti">
                                        <h3> <span>$</span>40<strong>/one Day</strong></h3>
                                    </div>
                                    <div className="our_pricing">
                                        <span>Premium</span>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                    </div>
                                </div>
                                <a className="read_more mar_top" href="/"> Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experts slin2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Meet Our Experts</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div id="exp" className="experts_box">
                                            <div className="experts_img">
                                                <figure><img src={process.env.PUBLIC_URL + "images/blog1.jpg"} alt="#" /></figure>
                                            </div>
                                            <div className="meet">
                                                <h3>Jacob</h3>
                                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="exp" className="experts_box">
                                            <div className="experts_img">
                                                <figure><img src={process.env.PUBLIC_URL + "images/blog2.jpg"} alt="#" /></figure>
                                            </div>
                                            <div className="meet">
                                                <h3>Lonut</h3>
                                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="exp" className="experts_box">
                                            <div className="experts_img">
                                                <figure><img src={process.env.PUBLIC_URL + "images/blog3.jpg"} alt="#" /></figure>
                                            </div>
                                            <div className="meet">
                                                <h3>Irina</h3>
                                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a className="read_more mar_top exper" href="/"> Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Get In Touch</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <form id="request" className="main_form">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <input className="contactus" placeholder="Full Name" type="type" name="Full Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Email " type="type" name="Email " />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={"Message"} />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="send_btn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="map_main">
                                    <div className="map-responsive">
                                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={386} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
