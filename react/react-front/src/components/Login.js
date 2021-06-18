import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {
    let a = 't';
    return (
        <div className="loginBox">
            <div className="inputEmailBox">
                <h5>이메일</h5>
                <input type="text"/>
            </div>
            <div className="inputPasswordBox">
                <h5>비밀번호</h5>
                <input type="password"/>
            </div>
            <div className="loginInfo">
                <span>로그인 정보</span>
            </div>
            <div className="btnBox">
                <span><Link to="#">가입하기</Link></span>
                {text}
                <button type="button" onClick={() => onLogin("test", "1234")}>로그인</button>
            </div>
        </div>
    );
};

export default React.memo(Login);