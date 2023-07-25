import axios from "axios";

axios.defaults.baseURL = "https://de-drf-api-a625517dd1a1.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = "multipart/form-data";
axios.defaults.withCredentials= true;