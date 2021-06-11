import { actions } from ".";

const { SWITCH_PERIOD_PLAN, SELECT_PLAN_PRICE } = actions;

export const switchPlanPrices = (period) => {
	const periodSwitch = period === "monthly" ? "yearly" : "monthly";

	return {
		type: SWITCH_PERIOD_PLAN,
		payload: { period: periodSwitch }
	};
};

export const selectPlanPrice = (plan) => {
	return {
		type: SELECT_PLAN_PRICE,
		payload: { type: plan }
	};
};
