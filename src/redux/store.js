import { applyMiddleware, createStore, compose } from "redux";
import { logger } from "./middleware/logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

 
const persistConfig = {
    key: 'root',
    storage,
    blacklist:['forgetPasswordReducer']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);

const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store)