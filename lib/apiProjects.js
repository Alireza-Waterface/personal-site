import supabase from "./supabase";

export async function getProjects() {
	const { data, error } = await supabase
		.from('projects')
		.select('*')
		.order('id', {
			ascending: true,
		});

	if(error) {
		console.error(error);
		throw new Error('خطا در روند بارگیری پروژه‌ها');
	}

	return data;
}

export async function getProject(id) {
	const { data, error } = await supabase
		.from('projects')
		.select('*')
		.eq('id', id)
		.select();

	if(error) {
		console.error(error);
		throw new Error('خطا در روند دریافت اطلاعات');
	}

	return data;
}

export async function updateProject(obj, id) {
   const { data, error } = await supabase
      .from('projects')
      .update(obj)
      .eq('id', id)
      .select();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند ثبت لایک");
   }

   return data;
}

export async function deleteProject(id) {
   const { data, error } = await supabase
		.from('projects')
		.delete()
		.eq('id', id);

   if (error) {
      console.error(error);
      throw new Error("خطا در روند حذف پروژه مورد نظر");
   }

   return data;
}

export async function createProject(requestData) {
	const { data, error } = await supabase
		.from('projects')
		.insert([
			{...requestData}
		]);
	
	if (error) {
		console.error(error);
		throw new Error('خطا در روند ایجاد پروژه');
	}

	return data;
}