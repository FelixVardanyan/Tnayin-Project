import { combineReducers } from "redux";
import { aboutReducer } from "./about/reducer";
const rootReducer = combineReducers({
    text: aboutReducer,
    likes: aboutReducer,
    comments: aboutReducer
})

export default rootReducer