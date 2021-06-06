import React from "react";

import PricePanels from "../../../ui/price-panels/PricePanels";

const SectionFive = ({ plans, planButton }) => (
	<div className="section-five container">
		<PricePanels plans={plans} planButton={planButton} />
	</div>
);

export default SectionFive;
