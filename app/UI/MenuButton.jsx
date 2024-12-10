'use client';

import { IoClose, IoMenu } from "react-icons/io5";

export default function MenuButton({className}) {
	const expandNavbar = () => {
		const links = document.querySelector('#links');
		links?.classList.toggle('expand');

		if(links?.classList.contains('expand')) {
			document.querySelector(`.${className} .open`).style.display = 'none';
			document.querySelector(`.${className} .close`).style.display = 'unset';
		} else {
			document.querySelector(`.${className} .open`).style.display = 'unset';
			document.querySelector(`.${className} .close`).style.display = 'none';
		}

	};

	return <div className={className} onClick={expandNavbar}>
		<IoMenu size={30} className='open' />
		<IoClose size={30} className='close' />
	</div>;
}