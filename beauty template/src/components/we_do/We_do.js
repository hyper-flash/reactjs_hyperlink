import React from 'react'

export default function We_do(props) {
    props.changeTitle("we-do");
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
                {/* what we do  */}
                <div className="we_do slin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-12">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src="images/weicon1.png" alt="#" /></i>
                                            <h3>Nail Art</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src="images/weicon2.png" alt="#" /></i>
                                            <h3>Manicure</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src="images/weicon3.png" alt="#" /></i>
                                            <h3>Pedicure</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="we_box">
                                            <i><img src="images/weicon4.png" alt="#" /></i>
                                            <h3>Paraffin wax</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
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
