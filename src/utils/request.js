import axios from "axios";

const instance = axios.create({
    baseURL: '',
    timeout: 45000 // 45s
});

// request interceptor
instance.interceptors.request.use(
    (config) => {
        // config.data = JSON.stringify(config.data);
        // config.headers = {
        //     "Content-Type": "application/json",
        // };
        return config;
    },
    (error) => {
        console.log("request failed", error);
        return Promise.reject(error);
    }
);

// response interceptor
instance.interceptors.response.use(
    (response) => {
        // do something...
        return response;
    },
    (error) => {
        console.log("response failed", error);
        return Promise.reject(error);
    }
);

/**
 * get
 * @param url  request url
 * @param params  request params
 * @returns {Promise}
 */
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            resolve(response.data);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * post 
 * @param url post url
 * @param data post data
 * @returns {Promise}
 */

function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

// unit all methods
export default function request(method, url, data) {
    return new Promise((resolve, reject) => {
        switch (method) {
            case "get":
                get(url, data)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("GET failed == ", error);
                        reject(error);
                    });
                break;
            case "post":
                post(url, data)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("POST failed == ", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

// export default instance;