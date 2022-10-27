import { combineReducers } from "redux";
import { todoReducer } from "./todoSlice";



const rootReducer = combineReducers({
    todo:todoReducer

})



export default rootReducer

export type State = ReturnType<typeof rootReducer>
