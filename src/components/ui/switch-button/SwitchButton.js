import React from "react";

const SwitchButton = ({ stylesClass, dispatch }) => (
	<div>
		<label className={`switch ${stylesClass}-switch`} onChange={dispatch}>
			<input type="checkbox"></input>
			<span className="slider round"></span>
		</label>
	</div>
);

export default SwitchButton;
