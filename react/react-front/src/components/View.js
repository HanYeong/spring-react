import React from 'react';
import '../scss/view.scss';

const View = ({post}) => {
    return (
        <>
            <div className="title">
                <span><h1>{post.title}</h1></span>
            </div>
            <div className="date">
                <span>{post.regDate}</span>
            </div>
            <div className="info">
                <span><b>{post.writer}</b></span>
            </div>
            <div className="subTitle">
                <span><h2>{post.subTitle}</h2></span>
            </div>
            <div className="text">
                <span>
                    <h3>
                        {post.subTitle}
                    </h3>
                    {/* <p>
                        {post.content}
                    </p> */}
                    <textarea name="textarea">
                        {post.content}
                    </textarea>
                </span>
            </div>
        </>
    );
}
export default View;