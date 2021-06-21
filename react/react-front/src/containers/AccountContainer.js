import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../components/Topbar';
import { active_modal, postAccount, userInfo } from '../models/account';
import LoginModal from '../components/LoginModal';
function AccountContainer() {
    const {showModal, id } = useSelector(state => state.account.status);
    const dispatch = useDispatch();
    const onAccount = () => {
        dispatch(active_modal());
    };
    const onLogin = (id, pwd) => {
        dispatch(postAccount(id, pwd));
    }

    useEffect(() => {
        dispatch(userInfo());
    }, [dispatch]);
    console.log(id);
    return (
        <>
            <Topbar onAccount={onAccount} accountData={id ? id.email : null}/>
            <LoginModal onAccount={onAccount} onLogin={onLogin} visible={showModal ? "login" : "hideLogin"}/>
        </>  
    );
}
export default React.memo(AccountContainer);