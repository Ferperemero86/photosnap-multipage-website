import { combineReducers } from "redux";

import displayReducer from "./display-reducer";
import pricePlansReducer from "./planSelected-reducer";

export default combineReducers({
	display: displayReducer,
	planSelected: pricePlansReducer
});
