import classes from './verify.module.css';

import Link from 'next/link';

export const metadata = {
	title: 'علیرضا آبچهره | تایید ایمیل حساب',
	description: 'در این صفحه از طریق ایمیل خود، حساب کاربری خود را تایید کنید',
	author: 'علیرضا آبچهره',
	robots: 'index, follow',
}

export default async function Verify() {
	return (
		<main className={classes.verify}>
			<h1 className={classes.title}>تایید ایمیل حساب</h1>

			<p>حساب کاربری شما با موفقیت تایید شد. برای ورود به حساب کاربری خود روی لینک زیر کلیک کنید</p>

			<Link href={`/auth?mode=login`}>ورود به حساب کاربری</Link>
		</main>
	);
}