import store from "../store";
import { actions } from "../actions";

const { SHOW_MOBILE_MENU } = actions;

const { display } = store;

const displayReducer = (state = display, action) => {
	switch (action.type) {
		case SHOW_MOBILE_MENU:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default displayReducer;
