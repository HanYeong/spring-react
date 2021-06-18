import * as postsAPI from '../api/account';

const ACTIVE_MODAL = 'ACTIVE_MODAL';

const POST_ACCOUNT_CHECK = 'POST_ACCOUNT_CHECK';
const POST_ACCOUNT_CHECK_SUCCESS = 'POST_ACCOUNT_CHECK_SUCCESS';
const POST_ACCOUNT_CHECK_ERROR = 'POST_ACCOUNT_CHECK_ERROR';

export const active_modal = () => ({type: ACTIVE_MODAL});

export const activeModal = () => dispatch => {
    dispatch(activeModal());
};

export const postAccount = (id, pwd) => async dispatch => {
    console.log(id, pwd);
    dispatch({ type: POST_ACCOUNT_CHECK });
    try {
        const post = await postsAPI.postAccountCheck(id, pwd);
        console.log(post);
        dispatch({type: POST_ACCOUNT_CHECK_SUCCESS, post});
    } catch (e) {
        dispatch({type: POST_ACCOUNT_CHECK_ERROR, error: e});
    }
};

const initialState = {
    status: {
        showModal: false,
        loading: false,
        token: null,
        id: null,
        error: null
    }
}

export default function account(state = initialState, action) {
    switch (action.type) {
        case ACTIVE_MODAL:
            return {
                ...state,
                status : {
                    loading: false,
                    showModal: state.status.showModal ? false : true,
                    token: null,
                    id: null,
                    error: null
                }
            }
        case POST_ACCOUNT_CHECK:
            return {
                ...state,
                status: {
                    loading: true,
                    token: null,
                    id: null,
                    error: null
                }
            }
        case POST_ACCOUNT_CHECK_SUCCESS:
            return {
                ...state,
                status: {
                    loading: false,
                    token: action.post,
                    id: null,
                    error: null
                }
            }
        case POST_ACCOUNT_CHECK_ERROR:
            return {
                ...state,
                status: {
                    loading: false,
                    token: null,
                    id: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}