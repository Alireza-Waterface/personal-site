import { getProject } from "@/lib/apiProjects";
import { notFound } from "next/navigation";

import classes from './project.module.css';
import Heading from "@/app/UI/Heading";
import Link from "next/link";

export async function generateMetadata({ params }) {
	const { id } = await params;
	const [projectData] = await getProject(id);

	return {
		title: `علیرضا آبچهره | پروژه ${projectData?.title}`,
		description: `علیرضا آبچهره | پروژه ${projectData?.description}`,
		author: 'علیرضا آبچهره',
		robots: 'index, follow',
		keywords: 'فریلنسر,علیرضا آبچهره,برنامه نویس وب,برنامه نویس فرانت اند,توسعه دهنده فرانت اند,waterface,alireza waterface,alireza abchehre,abchehre,توسعه دهنده وب,برنامه نویس سایت,آبچهره,آب چره,پروژه,پروژه ها,نمونه‌کار,نمونه کار ها,تجربه کاری,سابقه کار',
		openGraph: {
			title: `علیرضا آبچهره | پروژه ${projectData?.title}`,
			description: `علیرضا آبچهره | پروژه ${projectData?.description}`,
			url: `https://waterface.ir/projects/${id}`,
			siteName: 'وب‌سایت شخصی علیرضا آبچهره | توسعه‌دهنده قرانت‌اند',
			locale: 'fa_IR',
			type: 'website',
			images: [ // configure for different image sizes
				{
					url: `https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/projects/p${projectData.id}-1.png`,
					width: 640,
					height: 640,
					alt: `پروژه ${projectData?.title}`,
				},
			],
		},
	};
}

export default async function ProjectPage({ params }) {
	const { id } = await params;
	const [projectData] = await getProject(id);

	if(!projectData) notFound();

	return (
		<article className={classes.sample}>
			<div className={classes.container}>
				<div className={classes.gallery}>
					<img
						src={`https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/projects/p${projectData.id}-1.png`}
						alt={projectData.title}
						loading="lazy"
						fetchPriority="low"
						className={classes.img}
					/>
				</div>

				<Heading type="h3" size={1.5} className={classes.title}>{projectData.title}</Heading>

				<div className={classes.desc}>
					{
						projectData.description.split('\n').map(part => (
							<p key={part}>{part}</p>
						))
					}
				</div>
				
				<ul className={classes.list}>
					<legend>امکانات این پروژه:</legend>
					{
						projectData.features.map(feature => (
							<li key={feature}>{feature}</li>
						))
					}
				</ul>

				<ul className={classes.list}>
					<legend>ابزار های استفاده شده در این پروژه:</legend>
					{
						projectData.tools.map(tool => (
							<li key={tool}>{tool}</li>
						))
					}
				</ul>

				{ projectData.visitLink && <Link className={classes.link} href={projectData.visitLink} target="_blank" rel="norefferer">مشاهده وب‌سایت</Link> }
				{ projectData.github && <Link className={classes.link} href={projectData.github} target="_blank" rel="norefferer">ریپازیتوری گیت‌هاب پروژه</Link> }			
			</div>
		</article>
	);
}