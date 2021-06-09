import React from 'react';
import '../scss/date.scss';

function BoardDate(){
    const today = new Date().toLocaleString();
    return (
        <div className="date">
            <span>{today}</span>
        </div>
    );
}
export default BoardDate;