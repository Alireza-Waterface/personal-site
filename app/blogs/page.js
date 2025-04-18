import { getBlogs } from '@/lib/apiBlogs';
import classes from './blogs.module.css';

export const metadata = {
	title: 'علیرضا آبچهره | وبلاگ',
	description: 'بلاگ‌ها، مقالات و آموزش‌های کاربردی مرتبط با برنامه‌نویسی و دنیای کامپیوتر و دیجیتال',
	keywords: ['بلاگ', 'مقاله', 'آموزش', 'برنامه‌نویسی', 'کامپیوتر', 'دیجیتال'],
	authors: [{ name: 'علیرضا آبچهره', url: 'https://waterface.ir' }],
	robots: 'index, follow',
	openGraph: {
		title: `علیرضا آبچهره | وبلاگ`,
		description: 'بلاگ‌ها، مقالات و آموزش‌های کاربردی مرتبط با برنامه‌نویسی و دنیای کامپیوتر و دیجیتال',
		url: 'https://waterface.ir/blogs',
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

export default async function Blogs() {
	const blogs = await getBlogs();

	console.log(blogs)

	return (
		<main className={classes.blogs}>
			<h1 className={classes.title}>وبلاگ</h1>

			{ !blogs.length && <p className={classes.empty}>پستی جهت نمایش وجود ندارد</p>}
		</main>
	)
}