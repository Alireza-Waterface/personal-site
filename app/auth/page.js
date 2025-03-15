import Form from "./form";

import classes from './auth.module.css';

export const metadata = {
	title: 'علیرضا آبچهره | ورود یا ایجاد حساب کاربری',
	description: 'برای استفاده از تمام امکانات سایت به حساب کاربری خود وارد شوید',
	author: 'علیرضا آبچهره',
	robots: 'index, follow',
};

export default async function AuthPage({ searchParams }) {
	const { mode = 'signup', redirectURL = '' } = await searchParams;

	return (
		<main className={classes.auth}>
			<h1 className={classes.title}>احراز هویت</h1>

			<Form mode={mode} redirectURL={redirectURL} />
		</main>
	);
}