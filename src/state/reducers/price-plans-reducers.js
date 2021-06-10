import store from "../store";

const pricePlansReducer = (state = store, action) => {
	switch (action.type) {
		case "SELECT_PLAN_PRICE":
			return Object.assign({}, state, action.payload);
		case "SWITCH_PERIOD_PLAN":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default pricePlansReducer;
