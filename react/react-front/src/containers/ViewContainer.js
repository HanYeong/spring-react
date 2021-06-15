import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import View from '../components/View';
import { getPostId } from '../models/view';

function ViewContainer() {
    const { data, loading, error } = useSelector(state => state.view.post);
    const dispatch = useDispatch();
    const { cid } = useParams();
    useEffect(() => {
        dispatch(getPostId(cid));
    }, [cid, dispatch]);
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return <div>nodata</div>;
    return (
        <>
        <View post={data}/>
        </>
    );
}
export default ViewContainer;