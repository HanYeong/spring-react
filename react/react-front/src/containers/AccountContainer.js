import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../components/Topbar';
import { active_modal } from '../models/account';
import LoginModal from '../components/LoginModal';
function AccountContainer() {
    const flag = useSelector(state => state.account);
    const dispatch = useDispatch();

    const onAccount = () => {
        dispatch(active_modal());
    };
    console.log(flag);
    return (
        <>
            <Topbar onAccount={onAccount}/>
            <LoginModal onAccount={onAccount} visible={flag ? "login" : "hideLogin"}/>
        </>  
    );
}
export default React.memo(AccountContainer);