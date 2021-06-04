import React from "react";

import PricePanels from "../../../ui/price-panels/PricePanels";

const SectionFive = ({ planPrices, planButton }) => (
	<div className="section-five container">
		<PricePanels planPrices={planPrices} />
	</div>
);

export default SectionFive;
