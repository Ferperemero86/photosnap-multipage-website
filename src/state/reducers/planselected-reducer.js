import store from "../store";
import { actions } from "../actions";

const { SELECT_PLAN_PRICE, SWITCH_PERIOD_PLAN } = actions;

const { planSelected } = store;

const planSelectedReducer = (state = planSelected, action) => {
	switch (action.type) {
		case SELECT_PLAN_PRICE:
			return Object.assign({}, state, action.payload);
		case SWITCH_PERIOD_PLAN:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default planSelectedReducer;
