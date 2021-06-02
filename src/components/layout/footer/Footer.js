import React from "react";
import { useQuery, gql } from "@apollo/client";

import Img from "../../ui/image/Img";
import Menu from "../../ui/menu/Menu";
import Button from "../../ui/button/Button";

import { getCardsFromQuery, getElementFromQuery } from "../../../helpers";

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
	}
`);

const Footer = () => {
	const { loading, data } = useQuery(query);
	console.log("DATA", data);
	if (!loading) {
		return <h1>Footer</h1>;
	}
};

/* 
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
*/

export default Footer;
