import React from "react";
import { useQuery, gql } from "@apollo/client";

import Img from "../../ui/image/Img";
import Menu from "../../ui/menu/Menu";
import Button from "../../ui/button/Button";

import { getElementFromQuery } from "../../../helpers";

const query = gql(`
	query getFooterContent {
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
		button(name: "invite") {
			name
			label
		}
		icon(name: "arrowIconFirst") {
			name 
			url
		}
		copyRight {
			text
		}
	}
`);

const Footer = () => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		const { logos, menus, button, icon, copyRight } = data;

		const logoSecond = getElementFromQuery(logos, "logoSecond");
		const socialMenu = getElementFromQuery(menus, "socialMenu");
		const mainMenu = getElementFromQuery(menus, "mainMenu");

		return (
			<footer className="footer container">
				<div className="footer-header">
					<div className="footer-header-logo">
						<Img url={logoSecond.url} stylesClass="logo" />
						<Menu
							menuLinks={socialMenu.links}
							stylesClass="footer-header-social"
							linksType="images"
						/>
					</div>
					<Menu menuLinks={mainMenu.links} stylesClass="footer-header-menu" />
				</div>
				<div className="footer-body">
					<div>
						<Button stylesClass="footer-body-btn" label={button.label} />
						<Img url={icon.url} stylesClass="footer-body-arrow" />
					</div>
					<p className="footer-body-copyright">{copyRight.text}</p>
				</div>
			</footer>
		);
	}

	return null;
};

/* 
	
*/

export default Footer;
