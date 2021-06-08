import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../../ui/image/Img";
import Menu from "../../ui/menu/Menu";
import Button from "../../ui/button/Button";

import { getElementFromQuery } from "../../../helpers";

const Footer = () => {
	const query = useStaticQuery(graphql`
		query getFooterContent {
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
				copyRight {
					text
				}
			}
		}
	`);

	const { logos, menus, buttons, icons, copyRight } = query.apiJson;

	const logoSecond = getElementFromQuery(logos, "logoSecond");
	const socialMenu = getElementFromQuery(menus, "socialMenu");
	const mainMenu = getElementFromQuery(menus, "mainMenu");
	const arrowIconFirst = getElementFromQuery(icons, "arrowIconFirst");
	const inviteButton = getElementFromQuery(buttons, "invite");

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
					<Button stylesClass="footer-body-btn" label={inviteButton.label} />
					<Img url={arrowIconFirst.url} stylesClass="footer-body-arrow" />
				</div>
				<p className="footer-body-copyright">{copyRight.text}</p>
			</div>
		</footer>
	);
};

/* 
	
*/

export default Footer;
