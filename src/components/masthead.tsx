import React, { useState } from "react";
import Logo from "./logo";
import { ScrollContenxt } from "../utils/scroll-observer";
import "../styles/masthead.scss";

const MastHead: React.FC = () => {
	const refContainer = React.useRef<HTMLDivElement>(null);
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);
	const { scrollY } = React.useContext(ScrollContenxt);

	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		// Max progress is 100% just for performance purposes
		progress = Math.min(1, scrollY / elContainer.clientHeight);
	}

	const handleImageLoaded = () => {
		setImageLoaded(true);
	};

	return (
		<div
			ref={refContainer}
			className="masthead"
			style={{
				transform: `translateY(${-progress * 20}vh)`,
			}}
		>
			<video className="masthead__video" muted loop autoPlay>
				<source src="/Margelo/assets/masthead-bg.webm" type="video/webm" />
			</video>
			<div className="masthead-content">
				<div
					className={`masthead-content__logo
  			${imageLoaded ? "logo-active" : "logo-unactive"}`}
				>
					<Logo width={42} height={42} />
				</div>
				<div>
					<h1 className="masthead-content__title">Kalify Inc.</h1>
					<h2 className="masthead-content__subtitle">
						Think, Feel, Tech.
					</h2>
				</div>
				<div
					className={`masthead-content__arrow-down
					${imageLoaded ? "arrow-active" : "arrow-unactive"}`}
				>
					<img
						onLoad={handleImageLoaded}
						alt="scroll down"
						src="/Margelo/assets/arrow-down.webp"
					/>
				</div>
			</div>
		</div>
	);
};

export default MastHead;
