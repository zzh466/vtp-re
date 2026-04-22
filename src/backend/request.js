import axios from 'axios';
import {ipcMain} from'electron';
import {baseURL} from '@utils/utils.js'

axios.defaults.withCredentials=true
axios.defaults.baseURL = `http://${baseURL}`;
let cookie = null;

axios.interceptors.response.use(function(config){
    
    if(config.headers['set-cookie']&& config.headers['set-cookie'].length){
        console.log('set-cookie')
        cookie= config.headers['set-cookie']
    }
    return config
})
axios.interceptors.request.use(function(config){

    if(cookie){
        config.headers.Cookie = cookie;
    }
    // console.log(config)
    return config;
})




export default axios;