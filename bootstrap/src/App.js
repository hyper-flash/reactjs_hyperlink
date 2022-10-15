import "./App.css";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  var [text, setText] = useState();
  var [char, setChar] = useState(0);
  var [word, setWord] = useState(0);

  const textChange = (t) => {
    // add value in text
    setText(t.target.value);

    // count char length
    setChar(t.target.value.length);

    // count word
    setWord(t.target.value.split(' ').filter(function(n) { return n !== '' }).length);
    
  };

  const toLowerCaseFun = () => {
    setText(text.toLowerCase());
    console.log("lower");
    toast.success('To Lower Case', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toUpperCaseFun = () => {
    setText(text.toUpperCase());
    console.log("upper");
    toast('To Upper Case', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toSenCaseFun = () => {
    var a = text.toLowerCase();
    var b = a.split(" ");
    var c = b[0].charAt(0).toUpperCase() + b[0].slice(1);
    // console.log(c)
    b.splice(0, 1, c);
    var d = b.join(" ");
    setText(d);
    // console.log(d)
    console.log("sentance");
    toast('To Sentance Case', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toCapCaseFun = () => {
    var z = text.toLowerCase();
    var y = z.split(" ");
    // console.log(y)
    for (var i = 0; i < y.length; i++) {
      y[i] = y[i].charAt(0).toUpperCase() + y[i].slice(1);
    }
    var x = y.join(" ");
    // console.log(x)
    setText(x);
    console.log("capitalized");
    toast('To Capitalized Case', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toAlterCaseFun = () => {
    var l = text.toLowerCase();
    var k = l.split("");
    console.log(k);
    //i = 0 > odd, i = 1 > Even is UPPERCASE
    for (var i = 1; i < k.length; i += 2) {
      k[i] = k[i].toUpperCase();
    }
    console.log(k);
    var j = k.join("");
    // console.log(j)
    setText(j);
    console.log("alternative");

    toast('To Alternative Case', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toTrimCaseFun = () => {
    setText(text.trim());
    console.log("trim");
    toast('To Trim', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toTrimEndCaseFun = () => {
    setText(text.trimEnd());
    console.log("trimend");
    toast('To Trim End', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toTrimStartCaseFun = () => {
    setText(text.trimStart());
    console.log("trimstart");

    toast('To Trim Start', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const toReplaceCaseFun = () => {
    setText(text.replaceAll("i", "!"));
    console.log("change");
  };

  const toRemoveCaseFun = () => {
    setText(text.replaceAll(" ", ""));
    console.log("remove");
  };

  return (
    <>

      <ToastContainer />

      <div className="text-center">
      <div class="flex justify-center m-5">
          <div class="mb-3 xl:w-96">
            <textarea
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlTextarea1"
              rows="3" value={text}
              onChange={textChange}
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="m-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toLowerCaseFun}
          >

            ToLowerCase
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toUpperCaseFun}
          >
            ToUpperCase
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toSenCaseFun}
          >
            SentanceCase
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toCapCaseFun}
          >
            CapitalizedCase
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toAlterCaseFun}
          >
            AlternativeCase
          </button><br />
          <button
            className="m-2 inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toTrimCaseFun}
          >
            Trim
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toTrimEndCaseFun}
          >
            Trim End
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toTrimStartCaseFun}
          >
            Trim Start
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toReplaceCaseFun}
          >
            Replace I to !
          </button>
          <button
            className="m-2 inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={toRemoveCaseFun}
          >
            Remove All Space
          </button>
        </div>
        <br />
        <div class="flex space-x-2 justify-center">
          <h2 class="text-2xl font-medium leading-tight text-gray-800">
          Char Count Length : &nbsp;
            <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">{char}</span>
          </h2>
        </div>
        
        <div class="mt-4 flex space-x-2 justify-center">
          <h2 class="text-2xl font-medium leading-tight text-gray-800">
          Word Count Length : &nbsp;
            <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">{word}</span>
          </h2>
        </div>
        <div className="text-center">
          <button
            className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            type="submit"
            name="reset"
            onClick={() => window.location.reload(false)}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
