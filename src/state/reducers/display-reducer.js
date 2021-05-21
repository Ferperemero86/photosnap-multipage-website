const initialState = { mobileMenuDisplay: false };

const DisplayReducer = (state = initialState, action) => {
	console.log("In reducer");
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
