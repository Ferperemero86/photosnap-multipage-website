import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Panel from "../panel/Panel";
import SwitchButton from "../switch-button/SwitchButton";

import {
	selectPlanPrice,
	switchPlanPrices
} from "../../../state/actions/price-plans-actions";

const Panels = ({ plans, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const currentPlan = state.pricePlansReducer.planSelected.type;
	// console.log("STATE", state.pricePlansReducer.planSelected.type);
	const { planSelected } = state.pricePlansReducer;

	return plans.map((plan, idx) => {
		const planPrice =
			planSelected.period === "monthly"
				? plan.price.monthly
				: plan.price.yearly;

		const selectedClass = plan.name === currentPlan ? "selected" : "";
		// console.log(plan.name);
		const setPrice = () => dispatch(selectPlanPrice(plan.name));

		return (
			<Panel
				stylesClass={`price-panels-panel ${selectedClass}`}
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
			<div className="price-panels-panels">
				<Panels
					plans={plans}
					stylesClass="price-panels-panel"
					planButton={planButton}
				/>
			</div>
		</div>
	);
};

export default PricePanels;
