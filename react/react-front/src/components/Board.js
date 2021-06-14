import React from 'react';import '../scss/Board.scss';

const Board = ({children}) => {
    return (
        <div className="board">
            {children}
        </div>
    );
};

export default Board;