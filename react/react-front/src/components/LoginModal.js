import React from 'react';
import { useDispatch } from 'react-redux';
import '../scss/loginModal.scss';
import {BsX} from 'react-icons/bs';
import { active_modal } from '../models/account';
import Login from './Login';

function LoginModal({visible}) {
    // const flag = useSelector(state => state.account);
    const dispatch = useDispatch();

    const onAccount = () => {
        dispatch(active_modal());
    };
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
export default LoginModal;