import React, { useCallback, useRef, useState } from 'react';
import '../scss/Topbar.scss';
import { BsSearch } from 'react-icons/bs';
import { DiReact } from "react-icons/di";

function Topbar(){
    const DISABLESEARCH = 0;
    const ENABLESEARCH = 1;
    const [ searchBar, setSearchBar ] = useState(DISABLESEARCH);
    const [ text, setText ] = useState('');
    const searchBtnRef = useRef();

    const searchToggle = (e) => {
        if(searchBar === DISABLESEARCH){
            setSearchBar(ENABLESEARCH);
            e.target.style.color = "blue";
            searchBtnRef.current.style.display = "initial";
        }else if(searchBar === ENABLESEARCH){
            setSearchBar(DISABLESEARCH);
            e.target.style.color = "black";
            setText('');
            searchBtnRef.current.value = '';
            searchBtnRef.current.style.display = "none";
        }
    }
    const onChange = useCallback((e) => {
        setText(e.target.value);
    },[]);
    return (
        <div className="topBarBox">
            <div className="topBar">
                <div className="logo">
                    <DiReact size="2em"/>
                    HY
                </div>
                <div className="searchBtn">
                    <input type="text" className="searchBar" onChange={onChange} ref={searchBtnRef}/>
                    <span> 검색 : {text}{searchBar}</span>
                    {/* {searchBar ? <input type="text"/> : null} */}
                    <BsSearch size="2em" onClick={searchToggle}/>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Topbar);