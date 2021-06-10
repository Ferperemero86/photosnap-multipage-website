const SWITCH_PERIOD_PLAN = "SWITCH_PERIOD_PLAN";
const SELECT_PLAN_PRICE = "SELECT_PLAN_PRICE";

export const switchPlanPrices = (period) => {
	const periodSwitch = period === "monthly" ? "yearly" : "monthly";

	return {
		type: SWITCH_PERIOD_PLAN,
		payload: { planSelected: { period: periodSwitch } }
	};
};

export const selectPlanPrice = (plan) => {
	return {
		type: SELECT_PLAN_PRICE,
		payload: { planSelected: { type: plan } }
	};
};
