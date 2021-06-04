import React from "react";

import PricePanels from "../../../ui/price-panels/PricePanels";

const SectionFive = ({ planPrices, planButton }) => (
	<div className="section-five container">
		<PricePanels planPrices={planPrices} planButton={planButton} />
	</div>
);

export default SectionFive;
