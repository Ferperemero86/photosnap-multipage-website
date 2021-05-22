import React from "react";
import { Link } from "gatsby";

const Links = ({ links }) => {
	return links.map((link, idx) => {
		const { linkUrl, linkLabel } = link;

		return (
			<Link to={linkUrl} className="menu-link" key={idx}>
				{linkLabel}
			</Link>
		);
	});
};

const Menu = ({ stylesClass, menuLinks }) => {
	return (
		<div className={`menu ${stylesClass}`}>
			<Links links={menuLinks} />
		</div>
	);
};

export default Menu;
