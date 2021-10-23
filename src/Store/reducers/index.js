import { combineReducers } from "redux";
import urlListReducer from "./urlListReducer";


const reducer = combineReducers({
    urlList: urlListReducer
});

export default reducer;