import React from "react";

import PricePanels from "../../../ui/price-panels/PricePanels";
import PlanComparison from "../../../ui/plan-comparison/PlanComparison";

const SectionFive = ({ plans, planButton }) => (
	<div className="section-five container">
		<PricePanels plans={plans} planButton={planButton} />
		<PlanComparison />
	</div>
);

export default SectionFive;
