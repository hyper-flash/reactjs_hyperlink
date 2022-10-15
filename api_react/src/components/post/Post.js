import React, { useState } from 'react'
import axios from 'axios'

export default function Post() {
    let [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        device_type: 'A',
        login_type: 'S',
        device_token: 'cswdxwsfcescf'
    });

    let handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    const sendData = () => {
        // make axios post request
            const setHeaders = {
                'accept-language': 'en',
                'Content-Type': 'text/plain',
                'api-key': 'PvTrC1UcTLjjCnSkc00Eyw=='
              }
    
            // let postData = { 
            //     name: data.name,
            //     email: data.email,
            //     phone: data.phone,
            //     password: data.password,
            //     device_type: 'A',
            //     login_type: 'S',
            //     device_token: 'cswdxwsfcescf'
            // }
    
            axios.post('http://localhost:8055/api/v1/auth/signup',  data, {
                headers: setHeaders
            }).then(function (res) {
                console.log(res.data)   
            })
                
    }


    return (
        <div>
            {/* component */}
            {/* This is an example component */}
            <h3 className='text-center m-5'>Post Method</h3>
            <div className="max-w-2xl mx-auto bg-white p-16 mt-5">
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" value={data.name} onChange={handleChange}  />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
                            <input type="email" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" value={data.email} onChange={handleChange}  />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">phone</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="phone" value={data.phone} onChange={handleChange}  />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="password" value={data.password} onChange={handleChange}  />
                    </div>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendData} >Submit</button>
                {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button> */}
            </div>

        </div>
    )
}
