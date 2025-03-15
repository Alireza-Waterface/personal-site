import supabase from "./supabase";

const validateEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export async function signUp(data) {
	const { email, password, name } = data;
	
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

	if(!name) {
		errors.name = 'نام الزامی است';
	} else if(name.length < 2) {
		errors.name = 'نام باید حداقل 2 کاراکتر باشد';
	}

	if(Object.keys(errors).length > 0) {
		return {
			success: false,
			prevData: data,
			errors,
		}
	}

	const { data: result, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				name,
			}
		}
	})

	if(error) {
		console.log(error.message);
		throw new Error('خطا در روند ثبت نام');
	}

	return {
		success: true,
		op: 'signup',
		result,
	};
}

export async function login(data) {
	const { email, password } = data;

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

	if(Object.keys(errors).length > 0) {
		return {
			success: false,
			errors,
		}
	}

	const { data: user, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if(error) {
		console.log('from apiUser.js: '+error.message);
		return {
			success: false,
			error: error.message,
			user: null,
		}
	}

	return {
		success: true,
		option: 'login',
		user,
		error: null,
	};
}

export async function getUser() {
	const { data: user, error } = await supabase.auth.getUser();

	if(error) {
		console.log(error);
		return {
			user,
			error: error.name,
		}
	}

	return { user, error: null };
}

export async function recoverPassword(email) {
	const { data, error } = await supabase.auth.resetPasswordForEmail(email);

	if(error) {
		console.error(error);
		throw new Error('خطا در روند ارسال ایمیل بازیابی');
	}
	
	return {
		success: true,
		op: 'recoverPassword',
		data,
	};
}

export async function updateUser(data) {
	const { data: user, error } = await supabase.auth.updateUser({
		email: data.email,
		password: data.password
	});

	if(error) {
		console.log(error);
		return {
			user,
			error: error.name,
			success: false,
		}
	}

	return {
		success: true,
		user,
		error: null,
	};
}

export async function logout() {
	const { error } = await supabase.auth.signOut();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند خروج');
	}
	
	return true;
}

export async function deleteUser() {
	const { data, error } = await supabase.auth.admin.deleteUser(user.id);

	if(error) {
		console.error(error);
		throw new Error('خطا در روند حذف کاربر');
	}
	
	return data;
}