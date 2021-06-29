import { combineReducers } from "redux";
import polls from './polls'
import authReducer from './auth'

export default combineReducers({
    polls,
    authReducer
});