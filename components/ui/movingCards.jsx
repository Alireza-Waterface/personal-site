"use client";

import { InfiniteMovingCards } from "./infinit-moving-cards";

import { SiCssmodules, SiReacthookform, SiReactquery, SiReactrouter, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { FaToolbox } from 'react-icons/fa';

export function MovingCards() {
	return (
		<div
			className="grid place-items-center h-[8rem] rounded-md antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden" style={{direction: 'ltr', gridColumn: '1 / -1'}}>
			<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
		</div>
	);
}

const testimonials = [
	{
		title: "Styled-Components",
		icon: <SiStyledcomponents size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "React-Query",
		icon: <SiReactquery size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "CSS modules",
		icon: <SiCssmodules size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "React-Hook-Form",
		icon: <SiReacthookform size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "React-Router-Dom",
		icon: <SiReactrouter size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "Redux",
		icon: <SiRedux size={40} fill="#ff014f" color="#ff014f" />,
	},
	{
		title: "و ابزار های پرکاربرد دیگر",
		icon: <FaToolbox size={40} fill="#ff014f" color="#ff014f" />,
	},
];