import React from 'react';
import '../scss/loginModal.scss';
import {BsX} from 'react-icons/bs';
import Login from './Login';

function LoginModal({visible, onAccount}) {
    return (
        <div className={visible}>
            <div className="modalContainer">
                <div className="modalHead">
                    <b>계정 관리</b>
                </div>
                <BsX size="1.5em" className="modalCancel" onClick={onAccount}/>
                <Login />
            </div>
        </div>
    );
}
export default React.memo(LoginModal);