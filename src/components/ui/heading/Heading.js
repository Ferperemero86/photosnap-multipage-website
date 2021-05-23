import React from "react";

const Heading = ({ stylesClass, type, text }) => {
	if (type === "h1") {
		return <h1 className={`${stylesClass}`}>{text}</h1>;
	}
	if (type === "h2") {
		return <h2 className={`${stylesClass}`}>{text}</h2>;
	}
	if (type === "h3") {
		return <h3 className={`${stylesClass}`}>{text}</h3>;
	}
	if (type === "h4") {
		return <h4 className={`${stylesClass}`}>{text}</h4>;
	}
	return null;
};

export default Heading;
