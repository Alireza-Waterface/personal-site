'use server';

import { signUp, login, getUser, recoverPassword, updateUser, logout, deleteUser } from '@/lib/apiUser';
import { redirect } from 'next/navigation';

const validateEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export async function auth(mode, redirectURL, prevData, formData) {
	const email = formData.get('email');
	const password = formData.get('password');
	const name = formData.get('name');

	const data = {
		email,
		password,
		name,
	}

	let errors = {};

	if(!email) {
		errors.email = 'ایمیل الزامی است';
	} else if(!validateEmail(email)) {
		errors.email = 'ایمیل معتبر نیست';
	}

	if(!password) {
		errors.password = 'رمز عبور الزامی است';
	} else if(password.length < 6) {
		errors.password = 'رمز عبور باید حداقل 6 کاراکتر باشد';
	}

	if(mode === 'signup' && !name) {
		errors.name = 'نام الزامی است';
	} else if(mode === 'signup' && name.length < 2) {
		errors.name = 'نام باید حداقل 2 کاراکتر باشد';
	}

	if(Object.keys(errors).length > 0) {
		return {
			success: false,
			prevData: data,
			errors,
		}
	}

	if(mode === 'signup') {
		const user = await signUp({ email, password, name });

		return {
			success: true,
			user,
			message: 'حساب کاربری شما با موفقیت ایجاد و ایمیل تایید برای شما ارسال شد. پس از تایید حساب کاربری خود میتوانید به سایت وارد شوید',
		}
	} else if(mode === 'login') {
		const {success, user, error} = await login({ email, password });

		console.log(success, user, error);

		// if(redirectURL) {
		// 	redirect(`/${redirectURL}`);
		// } else {
		// 	redirect(`/`);
		// }
	}
}