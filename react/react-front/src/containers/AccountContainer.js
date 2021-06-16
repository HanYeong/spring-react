import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../components/Topbar';
import { active_modal, postAccount } from '../models/account';
import LoginModal from '../components/LoginModal';
function AccountContainer() {
    const flag = useSelector(state => state.account.status);
    const dispatch = useDispatch();
    const onAccount = () => {
        dispatch(active_modal());
    };
    const onLogin = () => {
        dispatch(postAccount("test", "1234"));
    }
    console.log(flag);
    return (
        <>
            <Topbar onAccount={onAccount}/>
            <LoginModal onAccount={onAccount} onLogin={onLogin} visible={flag.showModal ? "login" : "hideLogin"}/>
        </>  
    );
}
export default React.memo(AccountContainer);