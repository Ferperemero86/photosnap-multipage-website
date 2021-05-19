const initialState = { mobileMenuDisplay: false };

const DisplayReducer = (state = initialState, action) => {
	console.log("in the reducer");
	switch (action.type) {
	case "SHOW_MOBILE_MENU":
		return { ...state, mobileMenuDisplay: true };
	case "HIDE_MOBILE_MENU":
		return { ...state, mobileMenuDisplay: false };
	default:
		return state;
	}
};

export default DisplayReducer;
