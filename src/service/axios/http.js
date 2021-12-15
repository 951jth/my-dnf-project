import axios from 'axios'
import store from '@/store'

const axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.timeout = 45000;
axiosInstance.defaults.headers = {};
axiosInstance.interceptors.request.use(
    config => {
        //config.headers['Access-Control-Allow-Origin'] = '*';
        config.params = { 'apikey': 'xZhxxptQ7OKKyRmnhW083wOiDPfT5afv' };
        return config;
    }, error => {
        return Promise.reject(error);
    }
)

export default axiosInstance