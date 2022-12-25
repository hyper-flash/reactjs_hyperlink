import React, { useEffect, useState } from 'react'
import axios from 'axios';

import * as base32 from 'hi-base32';

import { useParams } from 'react-router-dom'

import Moment from 'react-moment';
import moment from 'moment';

export default function Post() {

    const date = moment().format('MM-DD');

    const urldata = useParams();

    const [isLoading, setLoading] = useState(true);

    let slug = base32.encode(date + "/" + urldata.id);

    slug = slug.replace(/=/g, "");

    let link = "https://telegram.dog/FlashtheRobot?start=" + slug;

    function red_tele() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.open(link, "_blank");
        }, 1000);
    }
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [isLoading]);
    

    return (
        <>
            <div className="flex h-screen w-screen items-center bg-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
                    <div className="max-w-md">
                        <div className="font-dark flex text-2xl font-bold"><img alt="" src="https://img.icons8.com/fluency/35/null/telegram-app.png" />&nbsp;Telegram Download</div>
                        <p className="mt-4 flex text-2xl font-light leading-normal md:text-3xl">
                            Iron man 1080P
                            <img alt="" src="https://img.icons8.com/fluency/35/null/file.png" />
                        </p>

                        <p className="text-2xl mt-5 mb-5 flex font-light leading-normal md:text-3xl"><img alt="" src="https://img.icons8.com/fluency/35/null/database.png" />&nbsp;1.1 GB</p>

                        

                        <div className='flex ml-1'><img alt="" src="https://img.icons8.com/color/25/null/downloads.png" />&nbsp;1500 - Downloads</div>

                        <p className="mb-5 mt-5">If Not Gating telegram link please refresh this page.</p>

                        <br />
                        {isLoading ?
                            <>
                                <button disabled type="button" className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg role="status" className="mr-2 inline h-6 w-6 animate-spin text-gray-200 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Loading...
                                </button>
                            </> : <>
                                <button onClick={red_tele} type="button" className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>&nbsp;
                                    Download
                                </button>
                            </>}

                        <button disabled type="button" className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-10 max-w-lg">
                        <img alt="" src="https://iili.io/HIW4O3g.png" />
                    </div>
                </div>
            </div>

        </>
    )
}
