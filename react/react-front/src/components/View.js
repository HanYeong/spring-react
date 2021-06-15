import React from 'react';
import '../scss/view.scss';

const View = ({post}) => {
    const today = new Date().toLocaleString();
    return (
        <>
            <div className="title">
                <span><h1>{post.company.catchPhrase}</h1></span>
            </div>
            <div className="date">
                <span>{today}</span>
            </div>
            <div className="info">
                <span><b>{post.username}</b></span>
            </div>
            <div className="subTitle">
                <span><h2>{post.company.bs}</h2></span>
            </div>
            <div className="text">
                <span>
                    <h3>
                        {post.email}
                    </h3>
                    <p>
                        {post.address.city}
                    </p>
                </span>
            </div>
        </>
    );
}
export default View;