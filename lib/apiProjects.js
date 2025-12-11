import supabase from "./supabase";

async function uploadFile(file, bucket = "projects", folder = "public") {
   const fileName = `${folder}/${Math.random()}-${file.name}`.replaceAll(
      "/",
      ""
   );

   const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

   if (uploadError) throw new Error(uploadError.message);

   const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);

   return data.publicUrl;
}

export async function getProjects() {
   const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("id", {
         ascending: false,
      });

   if (error) {
      console.error(error);
      throw new Error("خطا در روند بارگیری پروژه‌ها");
   }

   return data;
}

export async function getProject(slug) {
   const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند دریافت اطلاعات");
   }

   return data;
}

export async function updateProject(
   projectData,
   id,
   newCoverFile,
   newGalleryFiles
) {
   let updatedData = { ...projectData };

   if (newCoverFile) {
      const coverUrl = await uploadFile(newCoverFile, "projects");
      updatedData.cover_image = coverUrl;
   }

   if (newGalleryFiles && newGalleryFiles.length > 0) {
      const newUrls = await Promise.all(
         newGalleryFiles.map((file) => uploadFile(file, "projects"))
      );

      const existingImages = updatedData.gallery_images || [];
      updatedData.gallery_images = [...existingImages, ...newUrls];
   }

   const { data, error } = await supabase
      .from("projects")
      .update(updatedData)
      .eq("id", id)
      .select();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند ویرایش پروژه");
   }

   return data;
}

export async function deleteProject(id) {
   const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

   if (error) {
      console.error(error);
      throw new Error("خطا در روند حذف پروژه مورد نظر");
   }

   return data;
}

export async function createProject(
   newProjectData,
   coverFile,
   galleryFiles = []
) {
   let coverUrl = "";
   if (coverFile) {
      coverUrl = await uploadFile(coverFile, "projects");
   }

   let galleryUrls = [];
   if (galleryFiles.length > 0) {
      const uploadPromises = galleryFiles.map((file) =>
         uploadFile(file, "projects")
      );
      galleryUrls = await Promise.all(uploadPromises);
   }

   const finalProjectData = {
      ...newProjectData,
      cover_image: coverUrl,
      gallery_images: galleryUrls,
   };

   const { data, error } = await supabase
      .from("projects")
      .insert([finalProjectData])
      .select();

   if (error) {
      console.error(error);
      throw new Error("خطا در روند ایجاد پروژه");
   }

   return data;
}
