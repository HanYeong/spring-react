import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/contents.scss';
import imgA from '../res/imgs/testImg01.png';
import imgB from '../res/imgs/testImg02.png';
const Contents = ({posts}) => {
    return (
        <>
        <div className="content">
            {posts.map(posts => (
                <div className="contentBox" key={posts.id}>
                    <Link to={"/"+posts.id}>
                        <div className="contentImg">
                            <img src={imgA} alt="contentImg"/>
                        </div>
                        <div className="contentText">
                            <h4>
                                {posts.username}
                            </h4>
                            <p>
                                {posts.email}
                            </p>
                        </div>
                    </Link>
                    <div className="contentFooter">
                            <Link to="#">
                                <img src={imgB} alt="contentUser"/>
                                <span>{posts.name}</span>
                            </Link>
                        </div>
                </div>
            ))}
        </div>
      </>
    );
};
export default Contents;