"use client"; // Needed for Next.js App Router

import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if(typeof window === 'undefined') return;

		const header = document.querySelector('#header');
		if (!header) return;

		const observer = new IntersectionObserver(entries => {
			entries.forEach((entry) => {
				setIsVisible(entry.intersectionRatio < 0.3);
			})}, {
				root: null,
				threshold: 0.3,
			}
		);

		observer.observe(header);
		return () => observer.disconnect();
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
	
	return (
		<button
			onClick={scrollToTop}
			className={`top-btn ${isVisible ? 'show' : ''}`}
		>
			<GoMoveToTop size={25} />
		</button>
	);
};

export default ScrollToTop;