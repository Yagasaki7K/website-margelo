import { useEffect, useRef } from "react";

export const useAnimationFrame = (enabled: boolean, callback: () => void) => {
	const requestRef = useRef<any>();

	const animate = () => {
		callback();
		// Save the id of requestAnimationFrame function
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		if (enabled) {
			animate();
		} else {
			cancelAnimationFrame(requestRef.current);
		}
	}, [enabled]);
};
