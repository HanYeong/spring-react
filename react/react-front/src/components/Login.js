import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }
    return (
        <div className="loginBox">
            <div className="inputEmailBox">
                <h5>이메일</h5>
                <input type="text" onChange={onChangeId}/>
            </div>
            <div className="inputPasswordBox">
                <h5>비밀번호</h5>
                <input type="password" onChange={onChangePwd}/>
            </div>
            <div className="loginInfo">
                <span>로그인 정보</span>
            </div>
            <div className="btnBox">
                <span><Link to="#">가입하기</Link></span>
                <button type="button" onClick={() => onLogin(id, pwd)}>로그인</button>
            </div>
        </div>
    );
};

export default React.memo(Login);