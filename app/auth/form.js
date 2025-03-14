'use client';

import Link from "next/link";

import { useActionState, useEffect, useState } from "react";

import { auth } from '@/actions/auth';

import classes from './auth.module.css';

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Form({ mode = '', redirectURL = '' }) {
	const [formState, formAction] = useActionState(auth.bind(null, mode, redirectURL), {});

	const [show, setShow] = useState(false);

	useEffect(() => {
		if(formState?.result?.errors?.email) {
			document.getElementById('email').focus();
		} else if(formState?.result?.errors?.password) {
			document.getElementById('password').focus();
		}
	}, [formState]);

	return (
		<form action={formAction} className={classes.form}>
			{ mode !== 'login' &&
				<div className={classes.formRow}>
					<label htmlFor="name">نام کامل <span>*</span></label>
					<input
						type='text'
						id="name"
						name="name"
						inputMode='text'
						className={classes.input}
						defaultValue={formState?.result?.prevData?.name}
						required
					/>
					
					{ formState?.result?.errors?.name && <span>{formState?.result?.errors?.name}</span> }
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
					required
					defaultValue={formState?.result?.prevData?.email}
				/>
				
				{ formState?.result?.errors?.email && <span>{formState?.result?.errors?.email}</span> }
			</div>

			<div className={classes.formRow}>
				<label htmlFor="password">
					رمز عبور
					<span>*</span>
					{ show ?
						<FaRegEyeSlash className={classes.icon} title="مخفی‌کردن رمز عبور" size={25} onClick={() => setShow(prev => !prev)} />
						:
						<FaRegEye className={classes.icon} title="نمایش رمز عبور" size={25} onClick={() => setShow(prev => !prev)} />
					}
				</label>
				<input
					type={show ? 'text' : 'password'}
					id='password'
					name='password'
					className={classes.input}
					required
					defaultValue={formState?.result?.prevData?.password}
				/>
				
				{ formState?.result?.errors?.password && <span>{formState?.result?.errors?.password}</span> }
			</div>
			
			<button
				type='submit'
				className={classes.formBtn}
			>{ mode === 'login' ? 'ورود به حساب' : 'ایجاد حساب کاربری' }</button>

			<div>
				{
					mode === 'login' ?
					<Link className={classes.link} href={`/auth${redirectURL ? `?redirectURL=${redirectURL}` : ''}`}>ایجاد حساب کاربری</Link>
					:
					<Link className={classes.link} href={`/auth?mode=login${redirectURL ? `&redirectURL=${redirectURL}` : ''}`}>حساب کاربری دارید؟ وارد شوید</Link>
				}
			</div>
		</form>
	);
}