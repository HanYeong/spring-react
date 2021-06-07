import React from 'react';
import '../scss/Topbar.scss';
import { BsSearch } from 'react-icons/bs';
import { DiReact } from "react-icons/di";

function Topbar(){
    return (
        <div className="topBarBox">
            <div className="topBar">
                <div className="logo">
                    <DiReact size="1em"/>
                    React
                </div>
                <div className="searchBtn">
                    <BsSearch/>
                </div>
            </div>
        </div>
    );
}

export default Topbar;