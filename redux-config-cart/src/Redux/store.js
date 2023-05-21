import {combineReducers, legacy_createStore} from "redux";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as cartReducer} from "./cart/reducer";

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
})

export const store = legacy_createStore(rootReducer);