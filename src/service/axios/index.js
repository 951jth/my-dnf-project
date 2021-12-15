import http from './http';
import httpNoAuth from './http-no-auth';

const instance = (req) => {
    const instance = http;
    instance.defaults.baseURL = process.env.baseUrl
    return instance(req);

}
const imageInstance = (req) => {
    const instance = http;
    console.log('imgUrl', process.env.imgUrl, process.env.baseUrl)
    instance.defaults.baseURL = process.env.imgUrl
    return instance(req);
}

const commonInstance = (req) => instance(req, 'common');
const imgInstance = (req) => imageInstance(req, 'image');

export {
    commonInstance,
    imgInstance 
}