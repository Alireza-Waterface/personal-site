import supabase from "./supabase";

import { cache } from 'react';

import { PAGE_SIZE } from '../utils/consts';

export async function getRequests({ filter, sortBy, page }) {
   let query = supabase
		.from('requests')
		.select('*', { count: 'exact' });
	
   if (filter) query = query.eq(filter.field, filter.value);
	if (sortBy) query = query.order(sortBy.field, {ascending: sortBy.direction === 'asc'});

	if (page) {
      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      query = query.range(from, to);
   }
   
   const { data, error, count } = await query;

   if (error) {
      console.error(error);
      throw new Error('خطا در روند بارگیری پست‌های وبلاگ');
   }

   return {data, count};
}

export async function getRequest(id) {
	const { data, error } = await supabase
      .from("requests")
      .select("*")
      .eq("id", id)
      .single();

   if (error) {
      console.error(error);
      throw new Error("درخواست مورد نظر یافت نشد");
   }

   return data;
};

export async function deleteRequest(id) {
   const { data, error } = await supabase
		.from("requests")
		.delete()
		.eq("id", id);

   if (error) {
      console.error(error);
      throw new Error("خطا در روند حذف درخواست مورد نظر");
   }

   return data;
}

export async function createRequest(requestData) {
	const { data, error } = await supabase
		.from('requests')
		.insert([
			{...requestData}
		]);
	
	if(error) {
		console.error(error);
		throw new Error('خطا در روند ثبت درخواست');
	}

	return data;
}

export async function editRequest(obj, id) {
   const { data, error } = await supabase
      .from("requests")
      .update(obj)
      .eq("id", id)
      .select()
      .single();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند ویرایش درخواست");
   }
   
   return data;
}