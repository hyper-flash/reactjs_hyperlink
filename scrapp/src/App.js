import React, { useState, useEffect } from "react";
import axios from "axios";
import Plyr from 'plyr';
import "./App.css"
import BeatLoader from "react-spinners/ClipLoader";

function App() {
  const player = new Plyr('#player');

  const [isLoading, setLoading] = useState(true);
  const [url, Geturl] = useState('');

  function getUsers() {
    axios.get("https://rapid-stream.hyper-flash.workers.dev/https://streamtape.cc/v/3GyWopMPDrcdQx0")
      .then((response) => {
        var str = "" + response.data;
        
        var fullurl = str.match(/(?<=get_video\d*\s*).*?(?=\s*')/gm);
        var scrap_url = `https://streamtape.cc/get_video${fullurl[0]}&stream=1`;
        Geturl(scrap_url);
        setInterval(() => {
          setLoading(false)
        }, 2000);
      })
      .catch((err) => {
        setLoading(false)
      });
  }

  useEffect(() => {
    getUsers();
  }, []);


  if (isLoading) {
    return <><div className="load"><BeatLoader color="#36d7b7" /></div></>;
  }
  else {
    console.log(url.length)
    if (url.length < 70 || url.length == 0) {

      return (
        <>
          <main className="flex min-h-screen w-full items-center justify-center bg-gray-100">
            {/* component */}
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <button onClick={() => window.location.reload()}><span className="relative text-black group-hover:text-white">Please Refresh!</span></button>
            </button>
          </main>
        </>
      );
    } else {
      return (
        <>
          <div>
            <video id="player" width={"100%"} controls poster="https://m.media-amazon.com/images/I/81wmhpS+aRL._AC_SL1500_.jpg">
              <source src={url} type="video/mp4" />
            </video>
          </div>
          <br></br>
          <a href={url}>link</a>
        </>
      );
    }

  }

}

export default App;
