import React from 'react'

export default function Pricing(props) {
    props.changeTitle("pricing");

    return (
        <>
            <div>
                <div className="back_re">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>Our Pricing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* our pricing */}
                <div className="pricing slin">
                    <div className="container">
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
            </div>

        </>
    )
}
