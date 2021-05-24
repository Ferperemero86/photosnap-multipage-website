import React from "react";

const Button = ({ stylesClass, label, btnDisplay }) => {
	const button =
		btnDisplay === false ? null : (
			<button className={`btn ${stylesClass}`}>{label}</button>
		);

	return button;
};

export default Button;
