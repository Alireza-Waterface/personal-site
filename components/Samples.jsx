import { getProjects } from "@/lib/apiProjects";

import Heading from "@/app/UI/Heading";

import classes from './samples.module.css';
// import Sample from "@/app/UI/Sample";
import Link from "next/link";
import { ExpandableCardDemo } from "./ProjectCards";

export default async function Samples() {
	const data = await getProjects();
	
	if(!data) return <div>پروژه‌ای یافت نشد</div>;

	return (
		<section id="samples" className={classes.samples}>
			<p className={classes.intro}>برخی از نمونه‌کار های انجام شده</p>
			<Heading type="h2" size={2} className={classes.title}>نمونه‌کار ها</Heading>

			<ExpandableCardDemo data={data} />
			
			{/* {
				data.slice(0, 3).map(project => (
					<Sample key={project.id} data={project} />
				))
			} */}

			<Link href={'/projects'} className={classes.link}>مشاهده همه</Link>
		</section>
	);
}