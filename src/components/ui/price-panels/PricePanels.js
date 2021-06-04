import React from "react";
import { useDispatch } from "react-redux";

import Panel from "../panel/Panel";

import {
	setBasicPlan,
	setProPlan,
	setBusinessPlan
} from "../../../state/actions/price-plans-actions";

const Panels = ({ planPrices, stylesClass }) => {
	console.log("PLANPRICES", planPrices);
	const dispatch = useDispatch();

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
				stylesClass={stylesClass}
				heading={plan.heading}
				bodyText={plan.bodyText}
				dispatch={setPrice}
				key={idx}
			/>
		);
	});
};

const PricePanels = ({ planPrices, stylesClass }) => (
	<div className={`price-panels ${stylesClass}`}>
		<Panels planPrices={planPrices} stylesClass="price-panels-panel" />
	</div>
);

export default PricePanels;
