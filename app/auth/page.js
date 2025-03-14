import Form from "./form";

import classes from './auth.module.css';

export const metadata = {
	title: 'علیرضا آبچهره | ورود به حساب کاربری',
	description: 'برای استفاده از تمام امکانات سایت به حساب کاربری خود وارد شوید'
};

export default async function AuthPage({ searchParams }) {
	const { mode = '', redirectURL = '' } = await searchParams;

	return (
		<main className={classes.auth}>
			<h1 className={classes.title}>احراز هویت</h1>

			<Form mode={mode} redirectURL={redirectURL} />
		</main>
	);
}