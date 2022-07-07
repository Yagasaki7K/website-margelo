import React from "react";
import "../styles/works.scss";

const Works: React.FC = () => {
	return (
		<div className="work">
			<div className="work-content">
				<div className="work-wrapper">
					<span className="work-content__sub-title">We built</span>
					<h3 className="work-content__title">
						<span className="work-content__title-decoration">Kalify'</span>s
						app.
					</h3>
				</div>
			</div>
			<div className="work__image">
				<img src="https://raw.githubusercontent.com/ovatimee/jay/480bd9c107fc507d6d2a745ab3a0b8b16641cf49/src/assets/pinkpanda.webp" alt="work built" />
			</div>
		</div>
	);
};

export default Works;
