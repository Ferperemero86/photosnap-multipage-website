import { actions } from ".";

const { SHOW_MOBILE_MENU } = actions;

export const showMobileMenu = (displayState) => {
	let display;

	if (displayState === true) {
		display = false;
	} else if (displayState === false) {
		display = true;
	}

	return {
		type: SHOW_MOBILE_MENU,
		payload: { menu: display }
	};
};
