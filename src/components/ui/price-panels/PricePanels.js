import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Panel from "../panel/Panel";

import {
	setBasicPlan,
	setProPlan,
	setBusinessPlan
} from "../../../state/actions/price-plans-actions";

const Panels = ({ planPrices, planButton }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log(state);

	return planPrices.map((plan, idx) => {
		const planPrice =
			plan.name === "basic"
				? setBasicPlan
				: plan.name === "pro"
				? setProPlan
				: setBusinessPlan;

		const setPrice = () => dispatch(planPrice());

		return (
			<Panel
				stylesClass="price-panels-panel"
				heading={plan.heading}
				bodyText={plan.bodyText}
				price={plan.price}
				dispatch={setPrice}
				button={planButton}
				key={idx}
			/>
		);
	});
};

const PricePanels = ({ planPrices, stylesClass, planButton }) => (
	<div className={`price-panels ${stylesClass}`}>
		<Panels
			planPrices={planPrices}
			stylesClass="price-panels-panel"
			planButton={planButton}
		/>
	</div>
);

export default PricePanels;
