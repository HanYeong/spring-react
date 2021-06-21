import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getContents = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const response = await axios.get(BASE_URL+'list');
    console.log(response.data);
    return response.data;
};

export const getContentId = async id => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    await sleep(500);
    const response = await axios.get(BASE_URL+'view?bno='+id);
    // console.log(response.data);
    return response.data;
}