import supabase from "./supabase";

export async function getBlogs() {
	const { data, error } = await supabase
		.from('blogs')
		.select('*')
		.order('id', {
			ascending: true,
		});

	if(error) {
		console.error(error);
		throw new Error('خطا در روند بارگیری پست‌های وبلاگ');
	}

	return data;
}

export async function getBlog(slug) {
	const { data, error } = await supabase
		.from('blogs')
		.select('*')
		.eq('slug', slug)
		.select();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت پست وبلاگ');
	}

	return data;
}