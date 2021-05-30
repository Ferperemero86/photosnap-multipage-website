import React from "react";

import { useQuery, gql } from "@apollo/client";

import Img from "../../ui/image/Img";
import Button from "../../ui/button/Button";
import Menu from "../../ui/menu/Menu";

const query = gql(`
query mainMenuContent {
	logo(name: "mainLogo") {
		name
		url
	}
	menu(name: "mainMenu") {
		name
		links {
			url
			label
		}
	}
	button(name: "invite") {
		name
		label
	}
}
`);

const MenuBar = ({ stylesClass }) => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		console.log(data);
		const { logo, menu, button } = data;
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
