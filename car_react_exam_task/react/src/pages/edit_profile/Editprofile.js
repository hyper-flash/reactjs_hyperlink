import React, { useState, useEffect } from 'react'
import { Editprofileapi } from '../../api/apiHandler'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Editprofile() {

    let [data, setData] = useState({
        name: "",
        email: ""
    });

    function Checkdata(apidata) {

        if (apidata.code == 1) {
            toast.success('Edit Profile successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

        } else {

            toast.warn('Edit Profile Failed!', {
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

    let eventdata = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    useEffect(() => {
        Editprofileapi().then((resposnse) => {
            if (resposnse.data.code == 1) {
                console.log(resposnse.data)
                setData(resposnse.data.data)
            } else {
                console.log(resposnse.data)
                console.log('data not found')
            }
        });
    }, []);

    const Clickfunc = () => {
        // make axios post request
        Editprofileapi({ "email": data.email, "name": data.name }).then((resposnse) => {
            Checkdata(resposnse.data)
            if (resposnse.data.code == 1) {
                console.log(resposnse.data)
            } else {
                console.log(resposnse.data)
                console.log('data not found')
            }
        });
    }


    return (
        <div>
            <ToastContainer />
            <div className="flex items-center justify-center p-12">
                {/* Author: FormBold Team */}
                {/* Learn More: https://formbold.com */}
                <div className="mx-auto w-full max-w-[550px]">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="fName" value={data.name} placeholder="Full Name" onChange={eventdata} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email
                                </label>
                                <input type="text" name="email" id="fName" value={data.email} placeholder="Email Address" onChange={eventdata} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <Link style={{marginBottom: '20px'}} to={"/changepassword"}><i className="bi bi-key-fill"></i> Change Password</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300" onClick={() => Clickfunc()}>
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
