import { combineReducers } from "redux";
import contents from './contents';
import account from "./account";

const rootReducer = combineReducers({
    contents,
    account
});

export default rootReducer;