import React from "react";

import Heading from "../heading/Heading";

const TextBlock = ({ hType, hText, pText }) => {
	return (
		<div className="text-block">
			<Heading type={hType} text={hText} className="text-block-heading" />
			<p className="text-block-text">{pText}</p>
		</div>
	);
};

export default TextBlock;
