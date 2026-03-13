import { useEffect, useRef } from "react";

export const useAnimationFrame = (enabled: boolean, callback: () => void) => {
	const requestRef = useRef<number>();
	const callbackRef = useRef(callback);

	callbackRef.current = callback;

	useEffect(() => {
		if (!enabled) {
			if (requestRef.current !== undefined) {
				cancelAnimationFrame(requestRef.current);
			}
			return;
		}

		const animate = () => {
			callbackRef.current();
			requestRef.current = requestAnimationFrame(animate);
		};

		requestRef.current = requestAnimationFrame(animate);

		return () => {
			if (requestRef.current !== undefined) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [enabled]);
};
