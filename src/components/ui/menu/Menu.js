import React from "react";
import { Link } from "gatsby";

import Img from "../../ui/image/Img";

const Links = ({ menuLinks, linksType }) => {
	if (linksType === "images") {
		return menuLinks.map((link, idx) => {
			const { linkUrl, imgUrl } = link;

			return (
				<Link to={linkUrl} className="menu-link" key={idx}>
					<Img url={imgUrl} />
				</Link>
			);
		});
	}

	return menuLinks.map((link, idx) => {
		const { linkUrl, linkLabel } = link;

		return (
			<Link to={linkUrl} className="menu-link" key={idx}>
				{linkLabel}
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
