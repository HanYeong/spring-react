import React from 'react';
import '../scss/view.scss';

const View = ({post}) => {
    return (
        <div className="viewBox">
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
                    <textarea name="textarea" readOnly value={post.content}/>
                </span>
            </div>
        </div>
    );
}
export default React.memo(View);