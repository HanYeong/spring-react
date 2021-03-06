import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contents from '../components/Contents';
import { getPosts } from '../models/contents';

function ContentsContainer() {
    const { data, loading, error } = useSelector(state => state.contents.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    if (loading) return <div>로딩중...1</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return (
        <Contents posts={data} />
    );
}

export default React.memo(ContentsContainer);