'use server';

import { changeCodeState, getCodeByID } from '@/lib/apiVerify';
import { updateUserState } from '@/lib/user';
import { redirect } from 'next/navigation';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	}
});

export async function sendVerificationCode(email, codeID) {
	const codeData = await getCodeByID(codeID);

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: 'کد تایید ایمیل حساب کاربری',
		text: `کد تایید حساب کاربری شما: ${codeData.code}`
	};

	try {
		await transporter.sendMail(mailOptions);
		return {
			success: true,
			message: 'کد تایید با موفقیت ارسال شد',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: 'خطایی در ارسال ایمیل رخ داد',
		}
	}
}

export async function verifyCode(codeID, redirectURL, prevState, formData) {
	const codeData = await getCodeByID(codeID);

	const code = formData.get('code');

	if(code.trim().length !== 6) {
		return {
			success: false,
			message: 'کد تایید باید 6 رقمی باشد',
			code: code,
		}
	}

	const now = new Date();
	const expiresAt = new Date(codeData.expiresAt);
	
	if(expiresAt < now) {
		return {
			success: false,
			message: 'کد تایید منقضی شده است',
			code: code,
		}
	}

	if(codeData.code !== code) {
		return {
			success: false,
			message: 'کد تایید اشتباه است',
			code: code,
		}
	}

	await changeCodeState('true', codeID);
	await updateUserState('verified', codeData.user_id);

	redirect(redirectURL ? `/${redirectURL}` : '/');
}