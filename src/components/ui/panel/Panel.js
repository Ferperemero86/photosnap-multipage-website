import React from "react";

import Heading from "../heading/Heading";
import Button from "../button/Button";

const Panel = ({ stylesClass, heading, bodyText, dispatch }) => {
	return (
		<div className={`panel ${stylesClass}`}>
			<Heading stylesClass="panel-heading" type="h3" text={heading} />
			<p className="panel-body-text">{bodyText}</p>
			<Button label="test" onClick={dispatch} stylesClass="panel-button" />
		</div>
	);
};

export default Panel;
