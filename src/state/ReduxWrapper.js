import React from "react";

import { Provider } from "react-redux";

import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const storeData = (store) =>
	reduxCreateStore(rootReducer, applyMiddleware(thunk));

const ReduxWrapper = ({ element }) => (
	<Provider store={storeData()}>{element}</Provider>
);

export default ReduxWrapper;
