import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/';

export const getContents = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const response = await axios.get(BASE_URL+'list');
    // console.log(response.data);
    return response.data;
};

export const getContentId = async id => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    const response = await axios.get(BASE_URL+'view?bno='+id);
    // console.log(response.data);
    return response.data;
}