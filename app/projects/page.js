import { getProjects } from '@/lib/apiProjects';
import classes from './projects.module.css';
import Sample from '../UI/Sample';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
	const projects = await getProjects();

	return {
		title: `علیرضا آبچهره | پروژه‌ها و نمونه‌کار ها - ${projects?.length} پروژه`,
		description: "علیرضا آبچهره | توسعه دهنده فرانت‌اند و فریلنسر | پروژه‌ها، نمونه‌کار ها و سوابق کاری",
		author: 'علیرضا آبچهره',
		robots: 'index, follow',
		keywords: 'فریلنسر,علیرضا آبچهره,برنامه نویس وب,برنامه نویس فرانت اند,توسعه دهنده فرانت اند,waterface,alireza waterface,alireza abchehre,abchehre,توسعه دهنده وب,برنامه نویس سایت,آبچهره,آب چره,پروژه,پروژه ها,نمونه‌کار,نمونه کار ها,تجربه کاری,سابقه کار',
		openGraph: {
			title: `علیرضا آبچهره | پروژه‌ها و نمونه‌کار ها - ${projects?.length} پروژه`,
			description: "علیرضا آبچهره | توسعه دهنده فرانت‌اند و فریلنسر | پروژه‌ها، نمونه‌کار ها و سوابق کاری",
			url: 'https://waterface.ir/projects',
			siteName: 'وب‌سایت شخصی علیرضا آبچهره | توسعه‌دهنده فرانت‌اند',
			locale: 'fa_IR',
			type: 'website',
			images: [ // configure for different image sizes
				{
					url: 'https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me/me.webp',
					width: 640,
					height: 640,
					alt: 'علیرضا آبچهره',
				},
			],
		},
	};
}

export default async function Projects() {
	const projects = await getProjects();

	return (
		<>
			<header className={classes.header}>
				<h1 className={classes.title}>همه پروژه‌ها و نمونه‌کار ها</h1>
			</header>

			<main className={classes.projects}>
				{ projects.length > 0 ?
					projects.map(project => (
						<Sample data={project} key={project.id} />
					))
					:
					<div>
						پروژه‌ای یافت نشد
					</div>
				}
			</main>
		</>
	)
}