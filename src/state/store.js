import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = () => reduxCreateStore(rootReducer, applyMiddleware(thunk));

export default store;
