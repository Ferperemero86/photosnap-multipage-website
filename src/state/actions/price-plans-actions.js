const SET_BASIC_PLAN = "SET_BASIC_PLAN";
const SET_PRO_PLAN = "SET_PRO_PLAN";
const SET_BUSINESS_PLAN = "SET_BUSINESS_PLAN";

export const setBasicPlan = () => {
	return {
		type: SET_BASIC_PLAN,
		payload: { plan: { price: "$19.00" } }
	};
};

export const setProPlan = () => {
	return {
		type: SET_PRO_PLAN,
		payload: { plan: { price: "$39.00" } }
	};
};

export const setBusinessPlan = () => {
	return {
		type: SET_BUSINESS_PLAN,
		payload: { plan: { price: "$99.00" } }
	};
};
