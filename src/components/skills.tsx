import React, { useContext, useRef } from "react";
import { ScrollContenxt } from "../utils/scroll-observer";
import "../styles/skills.scss";

const opacityForBlock = (sectionProgross: number, blockNumber: number) => {
	const progress = sectionProgross - blockNumber;
	if (progress >= 0 && progress < 1) return 1;
	return 0.2;
};

const Skills: React.FC = () => {
	const { scrollY } = useContext(ScrollContenxt);
	const refContainer = useRef<HTMLDivElement>(null);

	const numOfPages = 3;
	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const { clientHeight, offsetTop } = elContainer;

		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;

		progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
	}

	return (
		<div ref={refContainer} className="skills">
			<div className="wrapper">
				<div className="skills-item">
					<p
						style={{
							opacity: opacityForBlock(progress, 0),
						}}
						className="skills-item__paragraph"
					>
						We know our tools inside out.
					</p>
				</div>
				<div className="skills-item">
					<p
						style={{
							opacity: opacityForBlock(progress, 1),
						}}
						className="skills-item__paragraph"
					>
						Our team has contributed 253 commits to Web Essentials core, powering
						thousands of apps worldwide.
					</p>
				</div>
				<div className="skills-item">
					<p
						style={{
							opacity: opacityForBlock(progress, 2),
						}}
						className="skills-item__paragraph skills-item__paragraph-custom"
					>
						We're maintaining some of the most popular open-source projects,
						with over<strong> 30 million downloads</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
