import axios from "axios";

axios.defaults.baseURL = 'th-1982-artistery-avenue-198c22334f81.herokuapp.com';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;