import React from "react";

import Img from "../../ui/Img";

const MainMenu = () => {
	return (
		<div className="main-menu">
			<div className="main-menu-bar">
				<Img
					url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241087/photosnap/shared/desktop/ykufpoveea1twje8dyvx.svg"
					stylesClass="menu-bar-logo"
				/>
				<Img
					url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241090/photosnap/shared/mobile/upsvqukofxwa49npe5jt.svg"
					stylesClass="menu-bar-hamburger"
				/>
			</div>
		</div>
	);
};

export default MainMenu;
