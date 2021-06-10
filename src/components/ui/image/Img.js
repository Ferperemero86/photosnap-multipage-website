import React from "react";

const Img = ({ url, stylesClass, dispatch }) => {
	if (dispatch) {
		return <img src={url} className={`${stylesClass}`} onClick={dispatch} />;
	}
	return <img src={url} className={`${stylesClass}`} />;
};

export default Img;
