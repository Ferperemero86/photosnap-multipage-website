import React from "react";
import { Link } from "gatsby";

import Img from "../../ui/image/Img";

const Links = ({ menuLinks, linksType }) => {
	if (linksType === "images") {
		return menuLinks.map((link, idx) => {
			const { url, label } = link;

			return (
				<Link to={url} className="menu-link" key={idx}>
					<Img url={label} />
				</Link>
			);
		});
	}

	return menuLinks.map((link, idx) => {
		const { url, label } = link;

		return (
			<Link to={url} className="menu-link" key={idx}>
				{label}
			</Link>
		);
	});
};

const Menu = ({ stylesClass, menuLinks, linksType }) => {
	return (
		<div className={`menu ${stylesClass}`}>
			<Links menuLinks={menuLinks} linksType={linksType} />
		</div>
	);
};

export default Menu;
