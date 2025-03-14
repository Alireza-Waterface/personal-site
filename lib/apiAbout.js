import supabase from "./supabase";

export async function getAbout() {
	const { data, error } = await supabase
		.from('about')
		.select('*')
		.eq('id', 1)
		.select();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت اطلاعات');
	}

	return data;
}

export async function updateAbout(obj) {
   const { data, error } = await supabase
      .from('about')
      .update(obj)
      .eq('id', 1)
      .select();

   if(error) {
      console.error(error);
      throw new Error("خطا در روند ویرایش");
   }

   return data;
}