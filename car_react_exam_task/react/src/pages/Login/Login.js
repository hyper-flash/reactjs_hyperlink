import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loginapi } from '../../api/apiHandler'
import { loginRedirectCallWithDataStore } from "../../pages/Common/RedirectPathMange"

export default function Login() {

    let [data, setData] = useState({
        email: "",
        password: ""
    });

    // let [apidata, setapiData] = useState()

    let eventdata = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    function Checkdata(apidata) {

        if (apidata.code == 1) {
            toast.success('Login successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

        } else {
            switch (apidata.message) {
                case 'The email field is required':
                    toast.warn('The email field is required!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    toast.pending('The email field is required!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });


                    break;
                case 'Please enter valid password':
                    toast.warn('Please enter valid password!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    break;
                case 'text_user_login_fail':
                    toast.warn('Login Fail!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    break;
                default:
                    toast.warn('Some Thing Went Wrong!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
            }
        }

    }

    const Clickfunc = () => {
        // make axios post request
        Loginapi({ "email": data.email, "password": data.password }).then((resposnse) => {
            if (resposnse.data.code == 1) {
                console.log(resposnse.data)
                Checkdata(resposnse.data);
                setTimeout(function () { loginRedirectCallWithDataStore(resposnse.data.data) }, 3000);
                
            } else {
                console.log('data not found')
                console.log(resposnse.data)
                Checkdata(resposnse.data);
            }
        });
    }

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Helmet>


            <div>
                <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">LOGO</a><button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick="toggleNavbar('example-collapse-navbar')">
                                <i className="text-white fas fa-bars" />
                            </button>
                        </div>
                        <div className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden" id="example-collapse-navbar">
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="flex items-center">
                                    <Link to="/signup" className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3" type="button" style={{ transition: 'all 0.15s ease 0s' }}>
                                        <i className="fas fa-arrow-alt-circle-down" /> Create new account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main>
                    <section className="absolute w-full h-full">
                        <div className="absolute top-0 w-full h-full bg-gray-900" style={{ backgroundImage: 'url(/img/login/register_bg_2.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }} />
                        <div className="container mx-auto px-4 h-full">
                            <div className="flex content-center items-center justify-center h-full">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                        <div className="rounded-t mb-0 px-6 py-6">
                                            <div className="text-center mb-3">
                                                <h1 className="font-bold">
                                                    Login
                                                </h1>
                                            </div>

                                            <hr className="mt-6 border-b-1 border-gray-400" />
                                        </div>
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                                <input type="email" name='email' className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" onChange={eventdata} placeholder="Email" style={{ transition: 'all 0.15s ease 0s' }} />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                                <input name='password' type="password" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" onChange={eventdata} style={{ transition: 'all 0.15s ease 0s' }} />
                                            </div>
                                            <div>
                                                <Link className="inline-flex items-center cursor-pointer" to='/forgotpassword'><span className="ml-2 text-sm font-semibold text-gray-700">Forgot password?</span></Link>
                                            </div>
                                            <div className="text-center mt-6">
                                                <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" style={{ transition: 'all 0.15s ease 0s' }} type="button" onClick={() => Clickfunc()} >Login</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <footer className="absolute w-full bottom-0 bg-gray-900 pb-6">
                            <div className="container mx-auto px-4">
                                <hr className="mb-6 border-b-1 border-gray-700" />
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-4/12 px-4">
                                        <div className="text-sm text-white font-semibold py-1">
                                            Copyright © 2019
                                            <a href="https://www.creative-tim.com" className="text-white hover:text-gray-400 text-sm font-semibold py-1">Creative Tim</a>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-8/12 px-4">
                                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                            <li>
                                                <a href="https://www.creative-tim.com" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">Creative Tim</a>
                                            </li>
                                            <li>
                                                <a href="https://www.creative-tim.com/presentation" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">About Us</a>
                                            </li>
                                            <li>
                                                <a href="http://blog.creative-tim.com" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">Blog</a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">MIT License</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </section>
                </main>
            </div>


        </div>
    )
}
