import { combineReducers } from "redux";

import displayReducer from "./display-reducer";
import pricePlansReducer from "./price-plans-reducers";

export default combineReducers({ displayReducer, pricePlansReducer });
