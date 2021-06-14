const ACTIVE_MODAL = 'ACTIVE_MODAL';

export const active_modal = () => ({type: ACTIVE_MODAL});

export const activeModal = () => dispatch => {
    dispatch(activeModal());
};

const initialState = false;

export default function account(state = initialState, action) {
    switch (action.type) {
        case ACTIVE_MODAL:
            return state ? false : true;
        default:
            return state;
    }
}