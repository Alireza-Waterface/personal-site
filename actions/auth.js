'use server';

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

const isNumeric = (value = '') => /^\d+$/.test(value);

export async function signup(prevState, formData, redirectUrl) {
	const email = formData.get('email');
	const password = formData.get('password');
	const name = formData.get('name');

	let result = {};

	if(!name.trim()) {
		result.success = false;
		result.errors = {
			name: 'لطفا نام خود را وارد کنید'
		};
		result.prevData = {
			email,
			password,
			name
		};
	} else if(name.trim().length < 2) {
		result.success = false;
		result.errors = {
			name: 'نام وارد شده معتبر نیست'
		};
		result.prevData = {
			email,
			password,
			name
		};
	}

	if(!email.includes('@')) {
		result.success = false;
		result.errors = {
			email: 'ایمیل وارد شده معتبر نمی‌باشد'
		};
		result.prevData = {
			email,
			password,
			name
		};
	}
	if(password.trim().length < 8) {
		result.success = false;
		result.errors = {
			password: 'کلمه عبور باید حداقل 8 کاراکتر باشد'
		};
		result.prevData = {
			email,
			password,
			name
		};
	}

	if(Object.keys(result).length > 0) {
		return {
			result,
		};
	}

	const hashedPassword = hashUserPassword(password);
	try {
		const id = createUser(email, hashedPassword, name);
		
		await createAuthSession(id);

		redirect(redirectUrl ? `/${redirectUrl}` : '/');
	} catch (error) {
		let result = {};
		if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
			result.success = false;
			result.errors = {
				email: 'حساب کاربری با این ایمیل وجود دارد'
			};
			result.prevData = {
				email,
				password,
				name
			};
			return {
				result,
			};
		}
		throw error;
	}
}

export async function login(prevState, formData, redirectUrl) {
	const email = formData.get('email');
	const password = formData.get('password');

	const existingUser = getUserByEmail(email);

	if(!existingUser) {
		return {
			result: {
				success: false,
				errors: {
					email: 'حساب کاربری با اطلاعات وارد شده یافت نشد',
				},
				prevData: {
					email,
					password,
				}
			}
		}
	}

	const isValidPassword = verifyPassword(existingUser.password, password);

	if(!isValidPassword) {
		return {
			result: {
				success: false,
				errors: {
					password: 'ایمیل یا کلمه عبور اشتباه است',
				},
				prevData: {
					email,
					password,
				}
			}
		}
	}

	await createAuthSession(existingUser.id);
	redirect(redirectUrl ? `/${redirectUrl}` : '/');
}

export async function auth(mode, redirectURL, prevState, formData) {
	if(mode === 'login')	return login(prevState, formData, redirectURL);
	return signup(prevState, formData, redirectURL);
}

export async function logout() {
	await destroySession();
	redirect('/');
}