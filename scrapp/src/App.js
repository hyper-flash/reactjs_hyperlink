import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

function App() {

  const [isLoading, setLoading] = useState(true);
  const [url, Geturl] = useState('');
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: url,
        provider: "html5"
      }
    ]
  };

  function getUsers() {
    axios.get(
      "https://rapid-stream.hyper-flash.workers.dev/https://streamtape.cc/v/jq2Zyqg71Ptzyml"
    )
      .then((response) => {

        var str = "" + response.data;
        var fullurl = str.match(/(?<=get_video\d*\s*).*?(?=\s*')/gm);
        var scrap_url = `https://streamtape.cc/get_video${fullurl[0]}&stream=1`;
        if (scrap_url != 'https://streamtape.cc/get_video?id=j%22%20+&stream=1') {
          Geturl(scrap_url);
        } else {
          Geturl("");
        }
        console.log(scrap_url)
        setLoading(false)
      })
      .catch((error) => setLoading(false));
  }

  useEffect(() => {
    getUsers();
  }, []);


  if (isLoading) {
    return <div>....</div>;
  }
  return (
    <>
      <Plyr source={videoSrc} />
    </>
  );  
}

export default App;
