import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { getElementFromQuery } from "../../../helpers";

import Img from "../image/Img";

const Fields = ({ plans, icon, stylesClass, columnPlan }) => {
	return plans.map((plan, idx) => {
		return (
			<div className={`${stylesClass}`} key={idx}>
				{icon && plan[columnPlan] && <Img url={icon.url} key={idx} />}
				{!icon && <p>{plan.title}</p>}
			</div>
		);
	});
};

const PlanComparison = () => {
	const query = useStaticQuery(graphql`
		query getPlanComparison {
			apiJson {
				planComparison {
					title
					basic
					pro
					business
				}
				icons {
					name
					url
				}
			}
		}
	`);

	const { planComparison, icons } = query.apiJson;
	const thickIcon = getElementFromQuery(icons, "thick");

	return (
		<div className="plan-comparison">
			<div className="plan-comparison-fields">
				<h3 className="heading">THE FEATURES</h3>
				<Fields plans={planComparison} stylesClass="features-field" />
			</div>
			<div className="plan-comparison-fields">
				<h3 className="heading">BASIC</h3>
				<Fields
					plans={planComparison}
					icon={thickIcon}
					stylesClass="field"
					columnPlan="basic"
				/>
			</div>
			<div className="plan-comparison-fields">
				<h3 className="heading">PRO</h3>
				<Fields
					plans={planComparison}
					icon={thickIcon}
					stylesClass="field"
					columnPlan="pro"
				/>
			</div>
			<div className="plan-comparison-fields">
				<h3 className="heading">BUSINESS</h3>
				<Fields
					plans={planComparison}
					icon={thickIcon}
					stylesClass="field"
					columnPlan="business"
				/>
			</div>
		</div>
	);
};

export default PlanComparison;
