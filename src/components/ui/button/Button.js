import React from "react";

const Button = ({ stylesClass, label, btnDisplay, onClick }) => {
	const button =
		btnDisplay === false ? null : onClick !== null ? (
			<button className={`btn ${stylesClass}`} onClick={onClick}>
				{label}
			</button>
		) : (
			<button className={`btn ${stylesClass}`}>{label}</button>
		);

	return button;
};

export default Button;
