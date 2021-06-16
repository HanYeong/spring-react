import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const postAccountCheck = async (id, pwd) => {
    await sleep(1000);
    const response = await axios.post(BASE_URL+'account', {
            postId: id,
            postPwd: pwd
    });
    return "로그인";
}