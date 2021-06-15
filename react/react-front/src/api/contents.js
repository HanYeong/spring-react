import axios from "axios";

export const getContents = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

export const getContentId = async id => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    console.log(response.data);
    return response.data;
}