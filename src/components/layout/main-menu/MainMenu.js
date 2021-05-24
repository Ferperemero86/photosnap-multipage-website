import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../../ui/image/Img";
import Button from "../../ui/button/Button";
import Menu from "../../ui/menu/Menu";

const MenuBar = ({ stylesClass }) => {
	const query = useStaticQuery(graphql`
		query buttonLabelQuery {
			dataJson {
				buttons {
					invite {
						btnLabel
					}
				}
				links {
					mainLinks {
						linkUrl
						linkLabel
					}
				}
			}
		}
	`);

	const { btnLabel } = query.dataJson.buttons.invite;
	const { mainLinks } = query.dataJson.links;

	return (
		<div className={`main-menu-bar ${stylesClass}`}>
			<Img
				url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241087/photosnap/shared/desktop/ykufpoveea1twje8dyvx.svg"
				stylesClass="main-menu-bar-logo"
			/>
			<Img
				url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241090/photosnap/shared/mobile/upsvqukofxwa49npe5jt.svg"
				stylesClass="main-menu-bar-hamburger"
			/>
			<Menu stylesClass="main-menu-bar-menu" menuLinks={mainLinks} />
			<Button stylesClass="main-menu-bar-btn" label={btnLabel} />
		</div>
	);
};

const MainMenu = () => {
	return (
		<div className="main-menu container">
			<MenuBar />
		</div>
	);
};

export default MainMenu;
