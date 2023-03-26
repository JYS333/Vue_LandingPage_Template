// customized axios
import axios from "axios";
import nProgress from "nprogress"; // import loading
import "nprogress/nprogress.css"; // loading style

// nProgress is an object, start | done to control its begin and end

const requests = axios.create({
    baseURL: "/mock",
    timeout: 5000,
})


requests.interceptors.request.use((conf) => {
    nProgress.start();
    return conf;
})

requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data
}, (err) => {
    console.log("server failed ===", err);
    return Promise.reject(new Error('fail'));
})

export default requests;