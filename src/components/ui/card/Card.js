import React from "react";

import Img from "../image/Img";
import TextBlock from "../text-block/TextBlock";
import Button from "../button/Button";

const CardSeparator = ({ show }) => {
	const separator = <hr className="card-body-separator" />;
	const separatorDisplay = show === true ? separator : null;

	return separatorDisplay;
};

const HeaderImage = ({ cardImages, stylesClass }) => {
	return cardImages.map((card) => {
		const { size, url } = card;

		const imgClass =
			size === "sm"
				? "sm-img"
				: size === "md"
				? "md-img"
				: size === "lg"
				? "lg-img"
				: "";

		return (
			<Img
				url={url}
				key={size}
				stylesClass={`card-header-img ${stylesClass}-img ${imgClass} img-fluid`}
			/>
		);
	});
};

const CardHeader = ({ stylesClass, cardImages }) => (
	<div className={`card-header ${stylesClass}-header img-responsive`}>
		<HeaderImage
			cardImages={cardImages}
			stylesClass={`${stylesClass}-header`}
		/>
	</div>
);

const CardBody = ({
	stylesClass,
	hType,
	hText,
	pText,
	btnDisplay,
	btnLabel,
	icon,
	separatorDisplay
}) => {
	return (
		<div className={`card-body ${stylesClass}-body`}>
			<TextBlock hType={hType} hText={hText} pText={pText} />
			<CardSeparator show={separatorDisplay} />
			<Button
				stylesClass={`card-body-btn ${stylesClass}-body-btn`}
				label={btnLabel}
				btnDisplay={btnDisplay}
			/>
			<Img url={icon} stylesClass={`card-body-icon ${stylesClass}-body-icon`} />
		</div>
	);
};

const Card = ({
	stylesClass,
	cardImages,
	hType,
	hText,
	pText,
	btnDisplay,
	btnLabel,
	icon,
	imgRight,
	separatorDisplay
}) => {
	return (
		<div className={`card ${stylesClass} ${imgRight}`}>
			<CardHeader cardImages={cardImages} stylesClass={`${stylesClass}`} />
			<CardBody
				hType={hType}
				hText={hText}
				pText={pText}
				btnDisplay={btnDisplay}
				btnLabel={btnLabel}
				icon={icon}
				separatorDisplay={separatorDisplay}
				stylesClass={`${stylesClass}`}
			/>
		</div>
	);
};

export default Card;
