import React, { useEffect, useState } from "react";

interface ScrollValue {
	scrollY: number;
}

export const ScrollContenxt = React.createContext<ScrollValue>({
	scrollY: 0,
});

interface Props {
	children: React.ReactElement;
}

const SizeObserver: React.FC<Props> = ({ children }) => {
	const [scrollY, setScrollY] = useState<number>(0);

	function handleScroll() {
		setScrollY(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<ScrollContenxt.Provider value={{ scrollY }}>
			{children}
		</ScrollContenxt.Provider>
	);
};

export default SizeObserver;
