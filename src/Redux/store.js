import {addItems} from "./reducers/reducer";
import {combineReducers} from "redux";
import { legacy_createStore,applyMiddleware } from "redux";

const rootReducers = combineReducers({
    addItems
})


const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch);
    }

    next(action)
}

const store=legacy_createStore(rootReducers,applyMiddleware(loggerMiddleware));



export default store