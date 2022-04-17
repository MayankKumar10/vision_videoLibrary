import React from "react";

export const BestSellingCard = ({
	props,
}) => {
	return (
		<>
			<div className="mid-card-container sm-card-shadow padding-normal flex-row-center imgTransition">
				<section className="flex-row-start">
					<img
						className="margin-0 cart-img"
						src={props.img}
						alt="img"
					/>
				</section>

				<span className="card-text-container card-brand-text">
					<span className="card-description">
						<h5>{props.categoryName}</h5>
						<span className="rating-container"></span>
						<h6>{props.description}</h6>
					</span>
				</span>
			</div>
		</>
	);
};
