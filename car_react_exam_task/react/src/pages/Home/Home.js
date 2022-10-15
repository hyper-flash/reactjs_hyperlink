import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Homepage, AddtoCartapi } from '../../api/apiHandler'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    var [data, setData] = useState([]);
    useEffect(() => {
        Homepage().then((resposnse) => {
            if (resposnse.data.code == 1) {
                setData(resposnse.data)
                setLoading(false);
            } else {
                console.log('data not found')
                setLoading(false);
            }
        });
    }, []);

    const [isLoading, setLoading] = useState(true);

    function UpdateCart(id) {
        AddtoCartapi({ "product_id": id, "qty": "1" }).then((resposnse) => {
            if (resposnse.data.code == 1) {
                setLoading(false);
                toast.success('Added to cart', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                setLoading(false);
                console.log('data not found')
            }
        });
    }

    if (isLoading) {

        return <div></div>;
    }

    return (
        <>
            <ToastContainer />
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <style>{`
                    body {
                        background: #f4f4f4;
                    }

                    .banner {
                        background: #a770ef;
                    background: -webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
                    background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
                    }
                `}</style>
            </Helmet>
            <div className="container-fluid">
                <div className="px-lg-5">
                    {/* For demo purpose */}
                    <div className="row py-2">
                        <div className="col-lg-12 mx-auto">
                            {/*<div className="text-white p-5 shadow-sm rounded banner">
                                <h1 className="display-4">CaR</h1>
                                
                </div>*/}
                        </div>
                    </div>

                    {/* End */}
                    <div className="row">
                        {/* Gallery item */}
                        {data.data?.map((cardata, index) => {
                            return (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div className="bg-white rounded shadow-sm"><img src={cardata.image} alt="" className="img-fluid card-img-top" />
                                        <div className="p-4">
                                            <h5> <Link to={`/cardetails/${cardata.id}`} className="text-dark">{cardata.name}</Link></h5>
                                            <p className="small text-muted mb-0"><i className="bi bi-fuel-pump"></i> {cardata.fuel_type}</p>
                                            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p className="small mb-0"><i className="fa fa-picture-o mr-2" /><span className="font-weight-bold"></span><i className="bi bi-cash"></i> {cardata.price}</p>
                                                <div className="px-3 rounded-pill font-weight-normal">
                                                    <button onClick={() => { UpdateCart(cardata.id) }} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                                                        <i className="bi bi-cart3 me-5"></i>
                                                        Add to Cart
                                                    </button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* End */}
                        {/* Gallery item */}

                    </div>
                </div>
            </div>

        </>
    )
}
