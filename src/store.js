import { createStore, applyMiddleware, compose } from "redux";
import articleReducer from "./Store/articleReducer";
import ReduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
const store = createStore(articleReducer, enhancer);
export default store;
