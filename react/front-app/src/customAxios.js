import axios from 'axios';

export default async function customAxios(url, callback){
    await axios({
        url: '/api' + url,
        method: 'post',
        baseURL: 'http://localhost:8080',
        withCredentials: true
    }).then(function (response){
        callback(response.data);
    });
}