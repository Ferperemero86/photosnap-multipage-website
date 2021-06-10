import store from "../store";

const displayReducer = (state = store, action) => {
	switch (action.type) {
		case "SHOW_MOBILE_MENU":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default displayReducer;
