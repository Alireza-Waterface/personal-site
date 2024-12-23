import supabase from './supabase';

export async function getSkills() {
	const { data, error } = await supabase
		.from('skills')
		.select('*')
		.order('id', {
			ascending: true,
		});
	
	if(error) {
		console.error(error);
		throw new Error('خطا در روند بارگیری مهارت‌ها');
	}
	
	return data;
}

export async function updateSkill(obj, id) {
   const { data, error } = await supabase
      .from('skills')
      .update(obj)
      .eq('id', id)
      .select();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند ویرایش مهارت");
   }

   return data;
}

export async function deleteSkill(id) {
   const { data, error } = await supabase
		.from('skills')
		.delete()
		.eq('id', id);

   if (error) {
      console.error(error);
      throw new Error("خطا در روند حذف مهارت مورد نظر");
   }

   return data;
}

export async function createSkill(requestData) {
	const { data, error } = await supabase
		.from('skills')
		.insert([
			{...requestData}
		]);
	
	if (error) {
		console.error(error);
		throw new Error('خطا در روند ایجاد مهارت');
	}

	return data;
}