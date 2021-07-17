import {combineReducers, createStore} from "redux";
import { CartReducer } from "./reducers/CartReducer";
const rootReducer = combineReducers({
    CartReducer,
})
const store=createStore(rootReducer);
export default store;
