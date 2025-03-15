'use client';

import Link from "next/link";

import { useState, useTransition } from "react";

import classes from './auth.module.css';

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { login, signUp } from "@/lib/apiUser";
import { redirect } from "next/navigation";

export default function Form({ mode = '', redirectURL = '' }) {
	const [form, setForm] = useState({
		email: '',
		password: '',
		name: '',
	})

	const [data, setData] = useState(null);

	const [showPassword, setShowPassword] = useState(false);

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e) => {
		e.preventDefault();

		startTransition( async () => {
			if(mode === 'login') {
				const res = await login({ email: form.email, password: form.password });
				if(res.success) {
					redirect(redirectURL ? `/${redirectURL}` : '/');
				}
				setData(res);
			} else if(mode === 'signup') {
				const res = await signUp({ email: form.email, password: form.password, name: form.name });
				if(res.success) {
					redirect(redirectURL ? `/${redirectURL}` : '/');				
				}
				setData(res);
			}
		});
	};

	return (
		<>
		<form onSubmit={handleSubmit} className={classes.form}>
			{ mode !== 'login' &&
				<div className={classes.formRow}>
				<label htmlFor="name">نام کامل <span>*</span></label>
				<input
					type='text'
					id="name"
					name="name"
					inputMode='text'
					className={classes.input}
					value={form.name}
					onChange={handleChange}
				/>
				
				{ data?.errors?.name && <span>{data?.errors?.name}</span> }
			</div>
			}

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
				
				{ data?.errors?.email && <span>{data?.errors?.email}</span> }
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
				
				{ data?.errors?.password && <span>{data?.errors?.password}</span> }
			</div>
			
			<button
				type='submit'
				className={classes.formBtn}
				disabled={isPending}
			>
				{ isPending && 'در حال احراز هویت...' }
				{ !isPending && mode === 'login' && 'ورود به حساب' }
				{ !isPending && mode === 'signup' && 'ایجاد حساب کاربری' }
			</button>
			
			{
				data?.error === 'Email not confirmed' ?
				<div className={classes.error}>
					<p>ایمیل شما تایید نشده است. لطفا ایمیل خود را چک‌ کنید.</p>
				</div>
				:
				data?.error === 'Invalid login credentials' ?
				<div className={classes.error}>
					<p>ایمیل یا رمز عبور اشتباه است.</p>
				</div>
				:
				null
			}

			<div>
				{
					mode === 'login' ?
					<Link className={classes.link} href={`/auth${redirectURL ? `?redirectURL=${redirectURL}` : ''}`}>ایجاد حساب کاربری</Link>
					:
					<Link className={classes.link} href={`/auth?mode=login${redirectURL ? `&redirectURL=${redirectURL}` : ''}`}>حساب کاربری دارید؟ وارد شوید</Link>
				}
			</div>

			{
				mode === 'login' &&
				<div>
					<Link className={classes.link} href="/reset-password">بازیابی رمز عبور</Link>
				</div>
			}
		</form>

		{ data?.success && data?.op === 'signup' &&
			<div className={classes.success}>
				<p>ثبت‌نام با موفقیت انجام و ایمیل تایید برای شما ارسال شد. بعد از تایید حساب، می‌توانید به پنل خود وارد شوید</p>
			</div>
		}
		</>
	);
}