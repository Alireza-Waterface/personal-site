'use client';

import { useState } from 'react';

import classes from './reset.module.css';
import { recoverPassword } from '@/lib/apiUser';

export default function Form() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setError(null);
		setSuccess(false);
		setEmail(e.target.value);
	};

	const validateEmail = email => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!validateEmail(email)) {
			setError('ایمیل معتبر نیست');
			setSuccess(false);
			return;
		}
		
		const res = await recoverPassword(email);

		if(res.success) {
			setError(null);
			setSuccess(true);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.formRow}>
				<label htmlFor="email">ایمیل <span>*</span></label>
				<input
					type='email'
					id="email"
					name="email"
					inputMode='email'
					className={classes.input}
					placeholder="someone@example.com"
					value={email}
					onChange={handleChange}
				/>
				
				{ error && <span>{error}</span> }
			</div>

			<button className={classes.formBtn} type='submit'>ارسال ایمیل بازیابی</button>

			{ success && !error && <p className={classes.success}>ایمیل بازیابی با موفقیت ارسال شد</p> }
		</form>
	)
}