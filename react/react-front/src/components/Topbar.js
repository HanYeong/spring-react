import React from 'react';
import '../scss/Topbar.scss';
import { BsSearch } from 'react-icons/bs';
import { DiReact } from "react-icons/di";

const Topbar = () => {
    return (
        <div className="topBarBox">
            <div className="topBar">
                <div className="logo">
                    <DiReact size="2em"/>
                    HY
                </div>
                <div className="searchBtn">
                    <input type="text" className="searchBar"/>
                    {/* {searchBar ? <input type="text"/> : null} */}
                    <BsSearch size="2em" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;