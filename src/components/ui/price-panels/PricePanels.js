import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Panel from "../panel/Panel";
import SwitchButton from "../switch-button/SwitchButton";

import {
	setBasicPlan,
	setProPlan,
	setBusinessPlan,
	switchPlanPrices
} from "../../../state/actions/price-plans-actions";

const Panels = ({ plans, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const { planSelected, planPrices } = state.pricePlansReducer;

	return plans.map((plan, idx) => {
		const planPriceSelected =
			plan.name === "basic"
				? setBasicPlan
				: plan.name === "pro"
				? setProPlan
				: setBusinessPlan;

		let planPrice = "";

		const planPeriod =
			planSelected.period === "monthly"
				? planPrices.monthly
				: planPrices.yearly;

		const planEl = planPeriod.find((item) => plan.name === item.name);

		planPrice = planEl.price;

		const setPrice = () => dispatch(planPriceSelected());

		return (
			<Panel
				stylesClass="price-panels-panel"
				heading={plan.heading}
				bodyText={plan.bodyText}
				price={planPrice}
				dispatch={setPrice}
				button={planButton}
				key={idx}
			/>
		);
	});
};

const PricePanels = ({ plans, stylesClass, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const { planSelected } = state.pricePlansReducer;

	const changePeriod = () => dispatch(switchPlanPrices(planSelected.period));

	return (
		<div className={`price-panels ${stylesClass}`}>
			<div className="price-panels-toggle">
				<p>Monthly</p>
				<SwitchButton stylesClass="price-panels" dispatch={changePeriod} />
				<p>Yearly</p>
			</div>
			<Panels
				plans={plans}
				stylesClass="price-panels-panel"
				planButton={planButton}
			/>
		</div>
	);
};

export default PricePanels;
