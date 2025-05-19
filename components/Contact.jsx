import { createRequest } from '@/lib/apiRequests';
import classes from './contact.module.css';
import ContactForm from '@/app/UI/ContactForm';

function validateForInjection(formData) {
	const suspiciousWords = [
		'select',
		'insert',
		'delete',
		'update',
		'from',
		'where',
		'drop',
		'union',
		'or',
		'and',
		'true',
		'false',
		'create',
		'=',
		'!',
		"'",
		'"',
		'`',
		'~',
		';',
		'script.',
		'script',
		'javascript:',
		'javascript',
	];
	 
	for(let prop in formData) {
		if(suspiciousWords.some(word => word == formData[prop].toLowerCase())) {
			return true;
		}
	}

	return false; // No suspicious patterns detected
}

export default function Contact() {
	async function handleRequest(prevState, formData) {
		'use server';

		const name = formData.get('name').trim();
		const phone = formData.get('phone').trim();
		const title = formData.get('title').trim();
		const description = formData.get('description').trim();

		const data = {
			name,
			phone,
			title,
			description,
		}

		if(validateForInjection(data)) {
			return { attack: true };
		}

		let errors = {};

		if (name.length === 0) {
			errors.name = { message: 'نام خود را وارد کنید' };
		} else if (name.length < 2) {
			errors.name = { message: 'طول نام وارد شده کمتر از حد مجاز است' };
		} else if (name.length > 50) {
			errors.name = { message: 'طول نام وارد شده بیشتر از حد مجاز است' };
		}

		if (phone.length === 0) {
			errors.phone = { message: 'شماره تلفن خود را وارد کنید' };
		} else if (phone.length !== 11) {
			errors.phone = { message: 'شماره تلفن وارد شده معتبر نمی‌باشد' };
		}

		if (title.length === 0) {
			errors.title = { message: 'عنوان درخواست خود را وارد کنید' };
		} else if (title.length < 5) {
			errors.title = { message: 'طول متن عنوان وارد شده کمتر از حد مجاز است' };
		} else if (title.length > 40) {
			errors.title = { message: 'طول متن عنوان وارد شده بیشتر از حد مجاز است' };
		}

		if (description.length === 0) {
			errors.description = { message: 'توضیحاتی در خصوص درخواست خود ارائه کنید' };
		} else if (description.length <= 5) {
			errors.description = { message: 'طول متن توضیحات وارد شده کمتر از حد مجاز است' };
		} else if (description.length > 500) {
			errors.description = { message: 'طول متن توضیحات وارد شده بیشتر از حد مجاز است' };
		}

		if (Object.keys(errors).length > 0) {
			return { errors, values: { name, phone, title, description } };
		}

		try {
			const res = await createRequest({ name, phone, title, description });
			return { success: true };
		} catch (error) {
			console.error(error);
			return { success: false };
		}
	}

	return (
		<section className={classes.contact} id='contact'>
			<p className={classes.intro}>فرم تماس با من</p>
			<h2 className={classes.title}>ارتباط با من</h2>

			<div className={classes.details}>
				<img
					src="https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/images/co-work.webp"
					className={classes.image}
					alt='تماس با من'
					loading='lazy'
					fetchPriority='low'
				/>

				<p className={classes.title2}>درخواست همکاری یا انجام پروژه</p>
				<p className={classes.title3}>علیرضا آبچهره</p>

				<p className={classes.job}>توسعه‌دهنده فرانت‌اند</p>
				<p className={classes.desc}>برای انجام پروژه یا کار در شرکت آزاد و آماده هستم. از طریق این فرم میتوانید با من در تماس باشید</p>
				<a className={classes.phone} href="tel:+989155706085">تلفن: <span>09155706085</span></a>
				<a className={classes.email} href="mailto:alireza.waterface@outlook.com">آدرس ایمیل: <span>Alireza.waterface@outlook.com</span></a>
			</div>

			<ContactForm action={handleRequest} />
		</section>
	);
}