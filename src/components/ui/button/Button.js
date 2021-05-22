import React from "react";

const Button = ({ stylesClass, label }) => {
	return <button className={`btn ${stylesClass}`}>{label}</button>;
};

export default Button;
