import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../../ui/image/Img";
import Menu from "../../ui/menu/Menu";
import Button from "../../ui/button/Button";

const Footer = () => {
	const query = useStaticQuery(graphql`
		query FooterQuery {
			dataJson {
				logoSecond {
					logoUrl
				}
				links {
					socialLinks {
						linkUrl
						imgUrl
					}
					mainLinks {
						linkUrl
						linkLabel
					}
				}
				buttons {
					invite {
						btnLabel
					}
				}
				icons {
					arrowIconFirst {
						url
					}
				}
				text {
					copyright
				}
			}
		}
	`);

	const { logoUrl } = query.dataJson.logoSecond;
	const { socialLinks, mainLinks } = query.dataJson.links;
	const { btnLabel } = query.dataJson.buttons.invite;
	const { arrowIconFirst } = query.dataJson.icons;
	const { copyright } = query.dataJson.text;

	return (
		<footer className="footer container">
			<div className="footer-header">
				<div className="footer-header-logo">
					<Img url={logoUrl} stylesClass="logo" />
					<Menu
						menuLinks={socialLinks}
						stylesClass="footer-header-social"
						linksType="images"
					/>
				</div>
				<Menu menuLinks={mainLinks} stylesClass="footer-header-menu" />
			</div>
			<div className="footer-body">
				<div>
					<Button stylesClass="footer-body-btn" label={btnLabel} />
					<Img url={arrowIconFirst.url} stylesClass="footer-body-arrow" />
				</div>
				<p className="footer-body-copyright">{copyright}</p>
			</div>
		</footer>
	);
};

export default Footer;
