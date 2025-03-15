import Form from "./Form";

import classes from './reset.module.css';

export const metadata = {
	title: 'علیرضا آبچهره | بازیابی رمز عبور',
	description: 'در صورت فراموشی رمز عبور خود، می‌توانید از این قسمت برای بازیابی آن استفاده کنید',
	author: 'علیرضا آبچهره',
	robots: 'index, follow',
}

export default function ResetPasswordPage() {
	return (
		<main className={classes.reset}>
			<h1 className={classes.title}>بازیابی رمز عبور</h1>

			<Form />
		</main>
	)
}