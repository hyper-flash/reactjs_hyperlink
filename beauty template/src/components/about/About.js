import React from 'react'

export default function About(props) {
    props.changeTitle("about");
    
    return (
        <>
            <div>
                <div className="back_re">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>What We Do </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about */}
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
            </div>

        </>
    )
}
