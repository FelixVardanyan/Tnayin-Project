import { combineReducers } from "redux";
import { aboutReducer } from "./about/reducer";
const rootReducer = combineReducers({
    text: aboutReducer
})

export default rootReducer