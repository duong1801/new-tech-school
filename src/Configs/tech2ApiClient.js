import axios from "axios";
import configs from "./configs";
import {userToken} from '../ultils'
// import { store } from '../redux/store';
import {logout} from '../Slice/UserSlice'

export const axiosClient = axios.create({
  baseURL: configs.API_URL,
  timeout: configs.TIME_OUT,
  headers: {
    mode: "cors",
    cache: "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "SproutVideo-Api-Key": "0536a73155705b50e632f3f75d8cc2c2",
  },
});


let refresh = false
// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let originalConfig = error.config;
    if (error.response.status === 401 && !refresh) {
      refresh = true

      const response = await axiosClient.post("refresh-token", {},{
        headers:{
          Authorization: `Bearer ${userToken["refresh_token"]}`
        }
      });


      // console.log(response);

      if (response.status === 200) {
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["access_token"]}`;


        localStorage.setItem("token",JSON.stringify({
          ...userToken,
          access_token: response.data["access_token"]
        }))

        return axiosClient(originalConfig);
      }
      if(response.response.status === 401){
        localStorage.removeItem("token");
        logout()
      }
    }
    refresh=false
    return error;
  }
);

const tech2ApiClient = {
  // getHeaders() {
  //     // doc tu local storage
  //     let headers = {}
  //     let token = localStorage.getItem('token')
  //     headers['Authorization'] = token;
  // },

  async get(URL) {
    try {
        let res = await axiosClient.get(URL);
        return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async post(url, data) {
    try {
      let res = await axiosClient.post(url, data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default tech2ApiClient;
