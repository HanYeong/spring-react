import axios from "axios";

const BASE_URL = 'http://localhost:8080/account/';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const postAccountCheck = async (id, pwd) => {
    await sleep(1000);
    const response = await axios.post(BASE_URL+'account', {
            id: id,
            pwd: pwd
    });
    return response.data;
}