import store from "../store";

const displayReducer = (state = store, action) => {
	switch (action.type) {
		case "SHOW_MOBILE_MENU":
			return { ...state, test: action.payload };
	}

	return state;
};

export default displayReducer;
