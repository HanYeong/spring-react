import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="loginBox">
            <div className="inputBox">
                <h5>이메일</h5>
                <input type="text"/>
            </div>
            <div className="inputBox">
                <h5>비밀번호</h5>
                <input type="password"/>
            </div>
            <div className="btnBox">
                <span><Link to="#">가입하기</Link></span>
                <button type="button">로그인</button>
            </div>
        </div>
    );
};

export default Login;