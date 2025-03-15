import Form from "./form";

import classes from './update.module.css';

export const metadata = {
	title: 'علیرضا آبچهره | تعیین رمز عبور',
	description: 'در این صفحه رمز جدید حساب کاربری خود را تعیین کنید',
	author: 'علیرضا آبچهره',
	robots: 'index, follow',
}

export default function UpdatePasswordPage() {
	return (
		<main className={classes.update}>
			<h1 className={classes.title}>بازیابی رمز عبور</h1>

			<Form />
		</main>
	)
}
