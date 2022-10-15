import React, {useState} from 'react'
import './main.css';

export default function Counter() {
    var [count, setCounter] = useState(0);

    const countplus = () => {
        setCounter(count + 1);
    }
    const countminus = () => {
        setCounter(count - 1);
    }
    const zero = () => {
        setCounter(count = 0);
    }

  return (
    <>
        <div className='countText flex justify-center'>
            <h3>Counter: {count}</h3>
        </div>
        
        <div className='flex justify-center'>
            <button onClick={countplus} className="button bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i className="bi bi-plus-circle"></i> 1
            </button>   
            <button onClick={countminus} className="button bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i className="bi bi-dash-circle"></i> 1
            </button>
            <button onClick={zero} className="button bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i class="bi bi-arrow-clockwise"></i>
            </button>
        </div>
    </>
  )
}
