import { getProject } from "@/lib/apiProjects";
import { notFound } from "next/navigation";

import classes from './project.module.css';
import Heading from "@/app/UI/Heading";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const [projectData] = await getProject(slug);

	return {
		title: `علیرضا آبچهره | پروژه ${projectData?.title}`,
		description: `علیرضا آبچهره | پروژه ${projectData?.metaDesc}`,
		keywords: `فریلنسر,علیرضا آبچهره,برنامه نویس وب,برنامه نویس فرانت اند,توسعه دهنده فرانت اند,waterface,alireza waterface,alireza abchehre,abchehre,توسعه دهنده وب,برنامه نویس سایت,آبچهره,آب چره,پروژه,پروژه ها,نمونه‌کار,نمونه کار ها,تجربه کاری,سابقه کار,${projectData?.metaKeywords.join()}`,
		author: 'علیرضا آبچهره',
		robots: 'index, follow',
		openGraph: {
			title: `علیرضا آبچهره | پروژه ${projectData?.title}`,
			description: `علیرضا آبچهره | پروژه ${projectData?.metaDesc}`,
			url: `https://waterface.ir/projects/${slug}`,
			siteName: 'وب‌سایت شخصی علیرضا آبچهره | توسعه‌دهنده فرانت‌اند',
			locale: 'fa_IR',
			type: 'website',
			images: [ // configure for different image sizes
				{
					url: `https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/projects/p${projectData.id}-1.webp`,
					width: 1280,
					height: 720,
					alt: `پروژه ${projectData?.title}`,
				},
			],
		},
	};
}

export default async function ProjectPage({ params }) {
	const { slug } = await params;
	const [projectData] = await getProject(slug);

	if(!projectData) notFound();

	return (
		<article className={classes.sample}>
			<section className={classes.container}>
				<div className={classes.gallery}>
					<img
						src={`https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/projects/p${projectData.id}-1.webp`}
						alt={projectData.title}
						loading="lazy"
						fetchPriority="low"
						className={classes.img}
					/>
				</div>

				<header>
					<Heading type="h1" size={1.5} className={classes.title}>{projectData.title}</Heading>
				</header>

				<div className={classes.desc}>
					{
						projectData.description.split('\n').map(part => (
							<p key={part}>{part}</p>
						))
					}
				</div>

				{ projectData.visitLink && <Link className={classes.link} title="مشاهده وب‌سایت" href={projectData.visitLink} target="_blank" rel="norefferer">مشاهده وب‌سایت</Link> }
				{ projectData.github && <Link className={classes.link} title="ریپازیتوری گیت‌هاب پروژه" href={projectData.github} target="_blank" rel="norefferer">ریپازیتوری گیت‌هاب پروژه</Link> }			
				
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
			</section>
		</article>
	);
}