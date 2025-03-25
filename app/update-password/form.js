'use client';

import { useState, useTransition } from 'react';

import classes from './update.module.css';
import { updateUser } from '@/lib/apiUser';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { redirect } from 'next/navigation';

export default function Form() {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const [isPending, startTransition] = useTransition();

	const validateEmail = email => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	const handleChange = (e) => {
		setError(null);
		setSuccess(false);
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!validateEmail(form.email)) {
			setError({
				email: 'ایمیل وارد شده معتبر نیست',
			});
			return;
		}

		if(form.password.length < 6) {
			setError({
				password: 'رمز عبور باید حداقل دارای 6 کاراکتر باشد',
			});
			return;
		}

		startTransition(async () => {
			const res = await updateUser(form);
			if(res.success) {
				setSuccess(true);
				redirect('/auth?mode=login');
			} else {
				setError(res.error);
			}
		});
	}

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
					value={form.email}
					onChange={handleChange}
				/>
				
				{ error?.email && <span>{error.email}</span> }
			</div>

			<div className={classes.formRow}>
				<label htmlFor="password">
					رمز عبور
					<span>*</span>
					{ showPassword ?
						<FaRegEyeSlash className={classes.icon} title="مخفی‌کردن رمز عبور" size={25} onClick={() => setShowPassword(prev => !prev)} />
						:
						<FaRegEye className={classes.icon} title="نمایش رمز عبور" size={25} onClick={() => setShowPassword(prev => !prev)} />
					}
				</label>
				<input
					type={showPassword ? 'text' : 'password'}
					id='password'
					name='password'
					className={classes.input}
					value={form.password}
					onChange={handleChange}
				/>
				
				{ error?.password && <span>{error.password}</span> }
			</div>

			<button className={classes.formBtn} type='submit' disabled={isPending}>
				{ isPending ? 'لطفا صبر کنید...' : 'به روز رسانی رمز عبور' }
			</button>

			{ !success && error === 'AuthSessionMissingError' && <p className={classes.error}>خطا! نشست فعال یافت نشد</p> }
			{ !success && error === 'AuthApiError' && <p className={classes.error}>خطا! رمز عبور جدید باید متفاوت از رمز عبور قبلی باشد</p> }
			{ success && !error && <p className={classes.success}>رمز عبور با موفقیت به روز شد</p> }
		</form>
	);
}
