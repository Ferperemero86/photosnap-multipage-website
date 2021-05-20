import React from "react";

import Img from "../ui/Img";
import Menu from "../ui/Menu";

const MenuBar = () => {
	return (
		<div className="menu-bar">
			<Img
				url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241087/photosnap/shared/desktop/ykufpoveea1twje8dyvx.svg"
				styles="menu-bar-logo"
			/>
			<Menu />
		</div>
	);
};

export default MenuBar;
