import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import {AddtoCartapi, RemoveCartapi} from '../../api/apiHandler'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
    var [data, setData] = useState([]);
    var total = 0;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        AddtoCartapi().then((resposnse)=>{
                console.log(resposnse.data)
                if(resposnse.data.code==1){
                    setData(resposnse.data)
                    setLoading(false);
                }else{
                    setData(resposnse.data)
                    console.log('data not found');
                    setLoading(false);
                }
            });
    }, []);  


    function Removecart(id){
        RemoveCartapi({"product_id" : id}).then((resposnse)=>{
            if(resposnse.data.code==1){
                toast.success('Item Removed From cart', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setData(resposnse.data)
                reapicall()
                setLoading(false);
            }else{
                setData(resposnse.data)
                setLoading(false);
                console.log('data not found')
            }
        });
    }

    function changeqty(product_id, qty_id){
        AddtoCartapi({"product_id": product_id, "qty": qty_id}).then((resposnse)=>{
            console.log(resposnse.data)
            if(resposnse.data.code==1){
                setData(resposnse.data)
                setLoading(false);
            }else{
                setData(resposnse.data)
                console.log('data not found');
                setLoading(false);
            }
        });
    }

    function reapicall(){
        AddtoCartapi().then((resposnse)=>{
            console.log(resposnse.data)
            if(resposnse.data.code==1){
                setData(resposnse.data)
                setLoading(false);
            }else{
                setData(resposnse.data)
                setLoading(false);
                console.log('data not found')
            }
        });
    }
    if (isLoading) {
        return <div>
        </div>;
    }
    return (
        <div>
            <ToastContainer />
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                <style>{`body {
                        background: #eecda3;
                        background: -webkit-linear-gradient(to right, #eecda3, #ef629f);
                        background: linear-gradient(to right, #eecda3, #ef629f);
                        min-height: 100vh;
                }`}</style>
            </Helmet>
            <div className="px-4 px-lg-0">
                {/* For demo purpose */}
                
                {/* End */}
                <div className="pb-5 mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                {/* Shopping cart table */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">car</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">qty</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                        {
                                        data.data?.map((cart, index) => {
                                            cart.price = cart.price * cart.qty
                                            total = total + cart.price
                                        return (
                                            <tr key={index}>
                                                <th scope="row" className="border-0">
                                                    <div className="p-2">
                                                        <img src={cart.image} alt="" width={70} className="img-fluid rounded shadow-sm" />
                                                        <div className="mt-2 d-inline-block align-middle">
                                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{cart.name}</a></h5>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="border-0 align-middle"><strong>{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></td>
                                                <td className="border-0 align-middle"><strong><button onClick={() => changeqty(cart.product_id, cart.qty += 1)} className='btn btn-dark'>+</button>&nbsp;&nbsp;{cart.qty}&nbsp;&nbsp;</strong><button onClick={() => changeqty(cart.product_id, cart.qty -= 1)} className='btn btn-dark'>-</button></td>
                                                <td className="border-0 align-middle"><button onClick={() => Removecart(cart.product_id)} className="text-dark"><i className="bi bi-trash3"></i></button></td>
                                            </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                                {/* End */}
                            </div>
                        </div>
                        <div className="row py-5 p-4 bg-white rounded shadow-sm">
                           
                            <div className="col-lg-12">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                <div className="p-4">
                                    <ul className="list-unstyled mb-4">
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                            <h5 className="font-weight-bold">{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                        </li>
                                    </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
