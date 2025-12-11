// import { getBlogs } from "@/lib/apiBlogs";
import { getProjects } from "@/lib/apiProjects";

export default async function sitemap() {
   // const blogs = await getBlogs();
   const projects = await getProjects();

   const baseUrl = "https://waterface.ir";

   const staticRoutes = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1.0,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.9,
      },
      {
         url: `${baseUrl}/blogs`,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
   ];

   const projectRoutes = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updated_at || project.created_at),
      changeFrequency: "monthly",
      priority: 0.9,
   }));

   return [...staticRoutes, ...projectRoutes];
}
