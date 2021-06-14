import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../scss/contents.scss';
import imgA from '../res/imgs/testImg01.png';

function reducer(state, action) {
    switch (action.type) {
      case 'LOADING':
        return {
          loading: true,
          data: null,
          error: null
        };
      case 'SUCCESS':
        return {
          loading: false,
          data: action.data,
          error: null
        };
      case 'ERROR':
        return {
          loading: false,
          data: null,
          error: action.error
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

const Contents = () => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
      });
    const getData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            dispatch({ type: 'SUCCESS', data: response.data });
            } catch (e) {
            dispatch({ type: 'ERROR', error: e });
            }
        };
        useEffect(() => {
            getData();
          }, []);
          const { loading, data: content, error } = state;
        if (loading) return <div>로딩중..</div>;
        if (error) return <div>에러가 발생했습니다</div>;
        if (!content) return null;
    return (
        <>
        <div className="content">
            {content.map(content => (
                <div className="contentBox" key={content.id}>
                    <Link to="#">
                        <div className="contentImg">
                            <img src={imgA} alt="contentImg"/>
                        </div>
                        <div className="contentText">
                            <h4>
                                {content.username}
                            </h4>
                            <p>
                                {content.email}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
      </>
    );
};
export default Contents;