import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../../ui/image/Img";
import Button from "../../ui/button/Button";
import Menu from "../../ui/menu/Menu";

import { getElementFromQuery } from "../../../helpers";

const MenuBar = ({ logo, menu, button, icon }) => {
	return (
		<div className={`main-menu-bar`}>
			<Img url={`${logo.url}`} stylesClass="main-menu-bar-logo" />
			<Img url={icon.url} stylesClass="main-menu-bar-hamburger" />
			<Menu stylesClass="main-menu-bar-menu" menuLinks={menu.links} />
			<Button stylesClass="main-menu-bar-btn" label={button.label} />
		</div>
	);
};

const MainMenu = () => {
	const data = useStaticQuery(graphql`
		query MainMenuQuery {
			apiJson {
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
				icons {
					name
					url
				}
				buttons {
					label
					name
				}
			}
		}
	`);

	const { buttons, icons, logos, menus } = data.apiJson;

	const logo = getElementFromQuery(logos, "mainLogo");
	const icon = getElementFromQuery(icons, "hamburger");
	const menu = getElementFromQuery(menus, "mainMenu");
	const button = getElementFromQuery(buttons, "invite");

	return (
		<div className="main-menu container">
			<MenuBar logo={logo} icon={icon} menu={menu} button={button} />
		</div>
	);
};

export default MainMenu;
