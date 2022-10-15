import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ForgotPassAPI } from '../../api/apiHandler'

export default function Forgot() {

    let [data, setData] = useState({
        email: ""
    });

    let eventdata = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    function Checkdata(apidata) {
        if (apidata.code == 1) {
            toast.success('Forgot password mail sent successfully', {
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
                case 'Email you have provided does not exist':
                    toast.warn(apidata.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    break;
                case 'The email field is required':
                    toast.warn('The email field is required', {
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
    console.log(data.email)
    const Clickfunc = async () => {
        // make axios post request
        await ForgotPassAPI({ "email": data.email }).then((resposnse) => {
            if (resposnse.data.code == 1) {
                console.log(resposnse.data)
                Checkdata(resposnse.data);
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
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Forgot Password
                        </h2>

                    </div>
                    <input type="hidden" name="remember" defaultValue="True" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input id="email-address" name="email" type="text" autoComplete="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={eventdata} placeholder='enter email address' />
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={Clickfunc} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: solid/lock-closed */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Forgot Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
