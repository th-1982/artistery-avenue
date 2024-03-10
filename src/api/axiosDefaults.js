import axios from "axios";

// define url, header and credentials for requests
axios.defaults.baseURL = 'https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();