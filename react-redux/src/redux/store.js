import {combineReducers, legacy_createStore} from "redux";
import { reducer as todosReducer } from "./todos/reducer";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as authenticationReducer  } from "./Authentication/reducer";

const rootReducer = combineReducers({
    counterReducer,
    todosReducer,
    authenticationReducer,
})

export const store = legacy_createStore(rootReducer);