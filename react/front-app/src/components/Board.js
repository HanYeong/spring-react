import React from 'react';
import '../scss/Board.scss';

function Board({children}){
    return (
        <div className="board">
            {children}
        </div>
    );
}
export default Board;
