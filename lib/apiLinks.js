import supabase from "./supabase";

export async function getLinks() {
	const { data: links, error } = await supabase
	.from('links')
	.select('*');

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت لینک‌ها');
	}

	return links;
}

export async function getLink(id) {
	const { data: link, error } = await supabase
	.from('links')
	.select('*')
	.eq('id', id)
	.single();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت لینک');
	}

	return link;
}

export async function userLinks(userID) {
	const { data: links, error } = await supabase
	.from('links')
	.select('*')
	.eq('userID', userID);

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت لینک‌ها');
	}

	return links;
}

export async function createLink(requestData) {
	const { data, error } = await supabase
	.from('links')
	.insert([
		{...requestData}
	])
	.single();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند ایجاد لینک');
	}

	return data;
}

export async function deleteLink(id) {
	const { data, error } = await supabase
	.from('links')
	.delete()
	.eq('id', id);

	if(error) {
		console.error(error);
		throw new Error('خطا در روند حذف لینک');
	}

	return data;
}