import * as postsAPI from '../api/contents';

const GET_POST_ID = 'GET_POST_ID';
const GET_POST_ID_SUCCESS = 'GET_POST_ID_SUCCESS';
const GET_POST_ID_ERROR = 'GET_POST_ID_ERROR';

export const getPostId = id => async dispatch => {
    dispatch({ type: GET_POST_ID });
    try {
        const post = await postsAPI.getContentId(id);
        dispatch({type: GET_POST_ID_SUCCESS, post});
    } catch (e) {
        dispatch({type: GET_POST_ID_ERROR, error: e});
    }
}
const initialState = {
    post: {
        loading: false,
        data: null,
        error: null
    }
}
export default function post(state = initialState, action) {
    state.post.data = null;
    switch (action.type) {
        case GET_POST_ID:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_POST_ID_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.post,
                    error: null
                }
            }
        case GET_POST_ID_ERROR:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}