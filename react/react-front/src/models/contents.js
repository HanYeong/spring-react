import * as postsAPI from '../api/contents';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS });  // 요청 시작 알림
    try {
        const posts = await postsAPI.getContents();
        dispatch({ type: GET_POSTS_SUCCESS, posts });   // 성공
    }catch(e){
        dispatch({ type:GET_POSTS_ERROR, error: e});
    }
};

const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    }
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts : {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.posts,
                    error: null
                }
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}