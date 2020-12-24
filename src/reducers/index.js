import {combineReducers} from "redux";
import noteReducer from "./noteReducer";


const rootReducer = combineReducers({
    notes: noteReducer
});

export default rootReducer;