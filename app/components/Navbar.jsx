import logo from '@/app/icon.png';

import './navbar.css';

import MenuButton from "../UI/MenuButton";
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='nav'>
			<div className='logo'>
				<img
					src={logo.src}
					alt="لوگو"
					title="لوگو"
				/>
			</div>

			<ul className='links' id="links">
				<li className='link'>
					<Link href="/#header">صفحه اصلی</Link>
				</li>
				<li className='link'>
					<Link href="/#skills">مهارت‌ها</Link>
				</li>
				<li className='link'>
					<Link href="/#samples">نمونه‌کار ها</Link>
				</li>
				<li className='link'>
					<Link href="/#resume">رزومه</Link>
				</li>
				<li className='link'>
					<Link href="/#blog">وبلاگ</Link>
				</li>
				<li className='link'>
					<Link href="/#contact">ارتباط با من</Link>
				</li>
			</ul>

			<MenuButton className='menuButton' />
		</nav>
	);
}