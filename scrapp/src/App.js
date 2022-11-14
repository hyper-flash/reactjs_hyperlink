import React, { useState, useEffect } from "react";
import axios from "axios";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import "./App.css"
import BeatLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";

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
      "https://rapid-stream.hyper-flash.workers.dev/https://streamtape.cc/v/3GyWopMPDrcdQx0 "
    )
      .then((response) => {

        var str = "" + response.data;
        var fullurl = str.match(/(?<=get_video\d*\s*).*?(?=\s*')/gm);
        var scrap_url = `https://streamtape.cc/get_video${fullurl[0]}&stream=1`;
        if (fullurl[0].length > 30) {
          Geturl(scrap_url);
          setInterval(() => {
            setLoading(false)
          }, 2000);
        } else {
          setLoading(true)
        }
        console.log(url)

      })
      .catch((error) => setLoading(false));
  }

  useEffect(() => {
    getUsers();
  }, []);


  if (isLoading) {
    return <><div className="load"><BeatLoader color="#36d7b7" /></div></>;
  } else {
    return (
      <>
        <div id="myElement">
          <Helmet><script>{`
					    jwplayer("myElement").setup({
								image: "https://content.jwplatform.com/thumbs/xJ7Wcodt-720.jpg",
					    		aspectratio: "16:9",
								width: '100%',
								aspectratio: '16:9',
					    		autostart: false,
                  type: "mp4",
				file : '${url}',
				abouttext: 'FILMKACA',
				aboutlink: 'http://filmkaca.xyz',
				tracks:[{"file":"<?php echo $cc; ?>","label":"Indonesia","kind":"captions","default":"true"}],
				captions: {color: '#ffb800',fontSize: 30,backgroundOpacity: 0},
				sharing: {
					sites: ['facebook','twitter','tumblr','googleplus',{icon: '//support-static.jwplayer.com/images/awesome.svg', src: 'http://www.jwplayer.com/?', label:'jwplayer'}],
					code: encodeURI("<iframe src='<?php echo $sharing;?>' width='480' height='320'></iframe>"),
					link: "<?php echo $sharing;?>"
						}
						    })`}
          </script></Helmet>
        </div>
      </>
    );
  }

}

export default App;
