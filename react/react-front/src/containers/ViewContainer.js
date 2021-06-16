import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import View from '../components/View';
import { getPostId } from '../models/view';

function ViewContainer() {
    const { data, loading, error } = useSelector(state => state.view.post);
    const dispatch = useDispatch();
    const { cid } = useParams();
    console.log(data, loading, error);
    useEffect(() => {
        dispatch(getPostId(cid));
    }, [cid, dispatch]);
    if (loading) return (
        <div className="viewBox">
            <div className="title-blank">
                <span><h1>blank</h1></span>
            </div>
            <div className="date-blank">
                <span>blank</span>
            </div>
            <div className="info-blank">
                <span><b>blank</b></span>
            </div>
            <div className="subTitle-blank">
                <span><h2>blank</h2></span>
            </div>
            <div className="text-blank">
                <span>
                    <h3>
                    blank
                    </h3>
                    <textarea name="textarea">
                    blank
                    </textarea>
                </span>
            </div>
        </div>
    );
    if (error) return <div>에러 발생!</div>;
    if (!data) return <div>nodata</div>;
    return (
        <>
        <View post={data}/>
        </>
    );
}
export default React.memo(ViewContainer);