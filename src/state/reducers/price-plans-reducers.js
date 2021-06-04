import store from "../store";

const pricePlansReducer = (state = store, action) => {
	switch (action.type) {
		case "SET_BASIC_PLAN":
			return Object.assign({}, state, action.payload);
		case "SET_PRO_PLAN":
			return Object.assign({}, state, action.payload);
		case "SET_BUSINESS_PLAN":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default pricePlansReducer;
