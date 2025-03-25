'use client';

import { useEffect, useState } from 'react';
import classes from './verify.module.css';

import Link from 'next/link';

export default function Verify({ searchParams }) {
	const [errorData, setErrorData] = useState({});
	
	useEffect(() => {
		if (typeof window !== "undefined") {
			const hash = window.location.hash.substring(1); // Remove '#'
			const params = new URLSearchParams(hash);
			
			const error = {
				error: params.get("error"),
				error_code: params.get("error_code"),
				error_description: params.get("error_description"),
			};

			setErrorData(error);
		}
	}, []);

	return (
		<main className={classes.verify}>
			<h1 className={classes.title}>تایید ایمیل حساب</h1>

			{
				errorData?.error_code === 'otp_expired' ? (
					<>
					<p className={classes.desc}>
						حساب کاربری شما به علت انقضای لینک تایید ارسالی، تایید نشد
						<br />
						لطفا مجددا درخواست ثبت نام را ارسال کنید
					</p>

					<Link className={classes.link} title='ایجاد حساب کاربری' href={`/auth`}>ایجاد حساب کاربری</Link>
					</>
				) : (
					<>
					<p className={classes.desc}>حساب کاربری شما با موفقیت تایید شد. برای ورود به حساب کاربری خود روی لینک زیر کلیک کنید</p>

					<Link className={classes.link} title='ورود به حساب کاربری' href={`/auth?mode=login`}>ورود به حساب کاربری</Link>
					</>
				)
			}
		</main>
	)
}