import axios from "axios";

axios.defaults.baseURL = 'https://8000-th1982-artisteryavenuea-y7a781b1i2e.ws-eu108.gitpod.io/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();