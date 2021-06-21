import * as postsAPI from '../api/account';

const ACTIVE_MODAL = 'ACTIVE_MODAL';

const POST_ACCOUNT_CHECK = 'POST_ACCOUNT_CHECK';
const POST_ACCOUNT_CHECK_SUCCESS = 'POST_ACCOUNT_CHECK_SUCCESS';
const POST_ACCOUNT_CHECK_ERROR = 'POST_ACCOUNT_CHECK_ERROR';
const POST_ACCOUNT_CHECK_LOCAL = 'POST_ACCOUNT_CHECK_LOCAL';

export const active_modal = () => ({type: ACTIVE_MODAL});

export const activeModal = () => dispatch => {
    dispatch(activeModal());
};

export const postAccount = (id, pwd) => async dispatch => {
    console.log(id, pwd);
    dispatch({ type: POST_ACCOUNT_CHECK });
    try {
        const post = await postsAPI.postAccountCheck(id, pwd);
        dispatch({type: POST_ACCOUNT_CHECK_SUCCESS, post});
    } catch (e) {
        dispatch({type: POST_ACCOUNT_CHECK_ERROR, error: e});
    }
};

export const userInfo = () => dispatch => {
    const userData = localStorage.userInfo;
    if(userData){
        const Info = JSON.parse(userData);
        console.log("데이터 : " + userData);
        dispatch({type: POST_ACCOUNT_CHECK_LOCAL, Info});
    }
}

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
    console.log("액션 : "+ JSON.stringify(action));
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
                    token: localStorage.setItem(
                        "userInfo",
                        JSON.stringify({
                            id: action.post.id,
                            email: action.post.email
                        })
                    ),
                    id: action.post,
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

        case POST_ACCOUNT_CHECK_LOCAL:
            return {
                ...state,
                status: {
                    loading: false,
                    token: null,
                    id: action.Info,
                    error: null
                }
            }
        default:
            return state;
    }
}