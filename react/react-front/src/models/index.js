import { combineReducers } from "redux";
import contents from './contents';
import account from "./account";
import view from './view';

const rootReducer = combineReducers({
    contents,
    account,
    view
});

export default rootReducer;