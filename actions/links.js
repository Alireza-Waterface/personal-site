'use server';

import { getLinks, saveLink } from "../lib/apiLinks";

function isValidURL(url) {
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
}

export async function save(user_id, expireDate, prevState, formData) {
	const url = formData.get('url');
	const category = formData.get('category');
	const title = formData.get('title');

	const prevData = {
		url,
		title,
		category,
	};

	if(!url.length) {
		return {
			success: false,
			urlMessage: 'لطفا لینک مورد نظر را وارد کنید!',
			prevData,
		};
	}

	if (!isValidURL(url)) {
		return {
			success: false,
			urlMessage: 'لینک وارد شده معتبر نیست!',
			prevData,
		};
  	}

	if(!title) {
		return {
			success: false,
			titleMessage: 'لطفا عنوانی برای لینک خود انتخاب کنید',
			prevData,
		};
	}

	const data = {
		originalURL: url,
		user_id,
		title,
		expire: `${expireDate}`,
		category,
	}

	// const result = await saveLink(data);

	return {
		success: true,
		link: result,
		successMessage: 'لینک کوتاه شده با موفقیت ایجاد شد',
	};
}