import React, { useContext, useRef } from "react";
import { SizeContext } from "../utils/size-observer";
import { useAnimationFrame } from "../utils/use-animation-frame";
import "../styles/slider.scss";

interface Props {
	children: React.ReactNode;
	initalOffsetX: number;
	contentWidth: number;
	marginTop?: number;
}

const SliderContainer: React.FC<Props> = ({
	children,
	initalOffsetX,
	contentWidth,
	marginTop,
}) => {
	const { innerWidth } = useContext(SizeContext);
	const refContainer = useRef<HTMLDivElement>(null);
	const refContent = useRef<HTMLDivElement>(null);
	const refScrollX = useRef<number>(initalOffsetX);

	let enabled = false;
	if (innerWidth != 0) {
		enabled = innerWidth < contentWidth;
	}

	useAnimationFrame(enabled, () => {
		const { current: elContainer } = refContainer;
		const { current: elContent } = refContent;
		if (elContainer && elContent) {
			elContainer.scrollLeft = refScrollX.current;
			refScrollX.current += 0.5;
			elContainer.scrollLeft = refScrollX.current;

			if (
				elContainer.scrollLeft + 1 >=
				elContent.clientWidth - elContainer.clientWidth
			) {
				refScrollX.current = 0;
				elContainer.scrollLeft = refScrollX.current;
			}
		}
	});

	return (
		<div
			ref={refContainer}
			style={{ marginTop: `${marginTop}px` }}
			className="slider-container"
		>
			<div ref={refContent} className="slider-content">
				{children}
			</div>
		</div>
	);
};

export default SliderContainer;
