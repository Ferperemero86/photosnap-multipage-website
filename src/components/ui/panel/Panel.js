import React from "react";

import Heading from "../heading/Heading";
import Button from "../button/Button";

const Panel = ({ stylesClass, heading, bodyText, button, dispatch, price }) => {
	console.log("price", price);
	return (
		<div className={`panel ${stylesClass}`}>
			<Heading stylesClass="panel-heading" type="h3" text={heading} />
			<p className="panel-body-text">{bodyText}</p>
			<p className="panel-price">{price}</p>
			<Button
				label={button.label}
				onClick={dispatch}
				stylesClass="panel-button"
			/>
		</div>
	);
};

export default Panel;
