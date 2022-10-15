import React, {useEffect, useState} from 'react'
import {ShowCarInfoapi} from '../../api/apiHandler'
import { useParams } from 'react-router';

export default function Singlepage() {
    const { id } = useParams();
    var [data, setData] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
            ShowCarInfoapi({"id":id}).then((resposnse)=>{
                console.log(resposnse.data)
                if(resposnse.data.code==1){
                    setData(resposnse.data.data)
                    setLoading(false);
                }else{
                    
                    console.log('data not found')
                }
            });
    }, [id]);

    if (isLoading) {
        return (<></>)
    }
    return (
        <>
            <div>
                <div className="min-w-screen min-h-screen bg-gray-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={data[0].image} className="w-full relative z-10" alt="" />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{data[0].name}</h1>
                                    {/* <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...
                                    </p> */}
                                    <br />
                                    <div className='flex justify-start'>
                                        <p>fuel type</p>
                                        <p className="ml-5">{data[0].fuel_type}</p>
                                    </div>
                                    <div className='flex justify-start'>
                                        <p>top speed</p>
                                        <p className="ml-5">{data[0].top_speed}</p>
                                    </div>
                                    <div className='flex justify-start'>
                                        <p>engine</p>
                                        <p className="ml-5">{data[0].engine}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="inline-block align-bottom mr-5 mb-2">
                                        <span className="text-2xl leading-none align-baseline">&#8377;</span>
                                        <span className="font-bold text-5xl leading-none align-baseline">{data[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                        <span className="text-2xl leading-none align-baseline">.00</span>
                                    </div>
                                    <div className="inline-block align-bottom">
                                        <button className="bg-gray-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
                {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                        </a>
                    </div>
                </div> */}
            </div>
        </>
    )
}
