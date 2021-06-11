import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';
import TodosContainer from './TodosContainer';
// 컨테이너
function CounterContainer() {
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }), shallowEqual);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = function(){dispatch(decrease())};
    const onSetDiff = function(diff){dispatch(setDiff(diff))}

    return (
        <>
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
        <TodosContainer/>
        </>
    );
}
export default CounterContainer;