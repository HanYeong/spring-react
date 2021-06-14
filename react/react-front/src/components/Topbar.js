import React from 'react';
import '../scss/Topbar.scss';
import { BsSearch } from 'react-icons/bs';
import { DiReact } from "react-icons/di";
import { BsFillPersonFill } from 'react-icons/bs';
import LoginModal from './LoginModal';

const Topbar = ({onFlag, onAccount}) => {
    return (
        <>
        <div className="topBarBox">
            <div className="topBar">
                <div className="logo">
                    <DiReact size="1.5em"/>
                    HY
                </div>
                <div className="searchBtn">
                    <input type="text" className="searchBar"/>
                    {/* {searchBar ? <input type="text"/> : null} */}
                    <BsSearch size="1.5em"/>
                    <BsFillPersonFill className="accountBtn" onClick={onAccount} size="1.5em"/>
                </div>
            </div>
        </div>
        <LoginModal visible={onFlag ? "login" : "hideLogin"}/>
        </>
    );
};

export default Topbar;