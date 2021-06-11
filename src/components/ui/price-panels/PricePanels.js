import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Panel from "../panel/Panel";
import SwitchButton from "../switch-button/SwitchButton";

import {
	selectPlanPrice,
	switchPlanPrices
} from "../../../state/actions/planselected-actions";

const Panels = ({ plans, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log(state);
	const currentPlan = state.planSelected.type;

	const { planSelected } = state;
	console.log("STATE", state);
	return plans.map((plan, idx) => {
		const planPrice =
			planSelected.period === "monthly"
				? plan.price.monthly
				: plan.price.yearly;

		const selectedClass = plan.name === currentPlan ? "selected" : "";

		const setPlan = () => dispatch(selectPlanPrice(plan.name));

		return (
			<Panel
				stylesClass={`price-panels-panel ${selectedClass}`}
				heading={plan.heading}
				bodyText={plan.bodyText}
				price={planPrice}
				dispatch={setPlan}
				button={planButton}
				key={idx}
			/>
		);
	});
};

const PricePanels = ({ plans, stylesClass, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log("PRICESSTATE", state);
	const { planSelected } = state;

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
