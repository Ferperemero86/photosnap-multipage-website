import React from "react";

const Heading = ({ hType }) => {
	console.log(hType);
	if (hType === "h1") {
		return <h1 className="text-block-heading">Heading</h1>;
	}

	return null;
};

const TextBlock = ({ hType }) => {
	return (
		<div className="text-block">
			<Heading hType={hType} className="text-block-heading" />
		</div>
	);
};

export default TextBlock;
