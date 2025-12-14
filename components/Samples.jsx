import { getProjects } from "@/lib/apiProjects";

import Link from "next/link";
import Heading from "@/app/UI/Heading";
import ProjectCards from "./ProjectCards";

import classes from "./samples.module.css";

export const dynamic = "auto";

export default async function Samples() {
   const data = await getProjects();

   if (!data) return <p>پروژه‌ای یافت نشد</p>;

   return (
      <section id="samples" className={classes.samples}>
         <p className={classes.intro}>برخی از نمونه‌کار های انجام شده</p>
         <Heading type="h2" size={2} className={classes.title}>
            نمونه‌کار ها
         </Heading>

         <ProjectCards data={data} />

         <Link href={"/projects"} className={classes.link}>
            مشاهده همه
         </Link>
      </section>
   );
}
