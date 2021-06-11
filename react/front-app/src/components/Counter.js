import React from 'react';
// 프레젠테이셔널
function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
    const onChange = e => {
        // e.target.value(string) -> number
        onSetDiff(parseInt(e.target.value, 10));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;