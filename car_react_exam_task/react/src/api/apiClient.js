import axios from "axios";
import {logOutRedirectCall} from '../pages/Common/RedirectPathMange'

const showMessage = (msg) => {
  //console.log(msg)
}
const axiosClient = axios.create({
    baseURL: 'http://localhost:8055',
    headers: {
      'api-key':'PvTrC1UcTLjjCnSkc00Eyw==',
      'Content-Type': 'text/plain'
    }
  });

  axiosClient.interceptors.request.use(function (config) {
    config.headers['token']=localStorage.getItem("MAtoken")
    return config;
});

  axiosClient.interceptors.response.use(
    function (response) {
      if(response.data.code==0){
        showMessage(response.data)
      }
      return response;
    }, 
    function (error) {
      let res = error.response;
      if (res.status == 401) {
        logOutRedirectCall()
      }
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
  );

  export {
    axiosClient
  };
  
  