import React from "react";

import { useQuery, gql } from "@apollo/client";

import Img from "../../ui/image/Img";
import Button from "../../ui/button/Button";
import Menu from "../../ui/menu/Menu";

import { getElementFromQuery } from "../../../helpers";

const query = gql(`
query mainMenuContent {
	logos {
		name
		url
	}
	menus {
		name
		links {
			url
			label
		}
	}
	buttons {
		name
		label
	}
}
`);

const MenuBar = ({ stylesClass }) => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		const { logos, menus, buttons } = data;

		const logo = getElementFromQuery(logos, "mainLogo");
		const menu = getElementFromQuery(menus, "mainMenu");
		const button = getElementFromQuery(buttons, "story");

		return (
			<div className={`main-menu-bar ${stylesClass}`}>
				<Img url={`${logo.url}`} stylesClass="main-menu-bar-logo" />
				<Img
					url="https://res.cloudinary.com/dby4kdmbv/image/upload/v1621241090/photosnap/shared/mobile/upsvqukofxwa49npe5jt.svg"
					stylesClass="main-menu-bar-hamburger"
				/>
				<Menu stylesClass="main-menu-bar-menu" menuLinks={menu.links} />
				<Button stylesClass="main-menu-bar-btn" label={button.label} />
			</div>
		);
	}

	return null;
};

const MainMenu = () => {
	return (
		<div className="main-menu container">
			<MenuBar />
		</div>
	);
};

export default MainMenu;
