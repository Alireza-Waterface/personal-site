import Image from 'next/image';
import classes from './tools.module.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';

export const metadata = {
	title: "علیرضا آبچهره | ابزار ها",
	description: "در این بخش ابزارهای مختلفی مانند کوتاه‌کننده لینک و ... برای استفاده‌ی شما قرار داده شده است.",
	author: 'علیرضا آبچهره',
   robots: 'index, follow',
	openGraph: {
      title: "علیرضا آبچهره | ابزار ها",
      description: "علیرضا آبچهره | ابزار های مختلف مانند کوتاه‌کننده لینک و ...",
      url: 'https://waterface.ir/tools',
      siteName: 'وب‌سایت شخصی علیرضا آبچهره | توسعه‌دهنده فرانت‌اند',
      locale: 'fa_IR',
      type: 'website',
      images: [ // configure for different image sizes
         {
            url: 'https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me//me.webp',
            width: 640,
            height: 640,
            alt: 'علیرضا آبچهره',
         },
      ],
   },
};

export default function Tools() {
	

	return (
		<main className={classes.tools}>
			<h1 className={classes.title}>ابزارها</h1>
			<p className={classes.desc}>در این بخش ابزارهای مختلفی برای استفاده‌ی شما قرار داده شده است.</p>

			<section className={classes.tool}>
				<div className={classes.toolImage}>
					<Image
						src={'https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/sign/tools/url-shortener.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0b29scy91cmwtc2hvcnRlbmVyLndlYnAiLCJpYXQiOjE3NDEzNjE1NDEsImV4cCI6MTc3Mjg5NzU0MX0.sxNTU_J_PvclRImz2NNo_cF0U-KoHi8TOJ5y1Cfxoi0'}
						fill
						alt={'کوتاه‌سازی لینک'}
						quality={70}
					/>
				</div>

				<div className={classes.toolContent}>
					<h2 className={classes.toolTitle}>کوتاه‌کننده لینک</h2>
					<p className={classes.toolIntro}>ابزار کوتاه‌کننده لینک قابل استفاده به صورت رایگان (6 کاراکتر) و اختصاصی (4 کاراکتر)</p>
					<Link href={`/url-shortener`} className={classes.toolLink}>
						ادامه مطلب
						<FaArrowLeftLong size={20} className={classes.icon} />
					</Link>
				</div>
			</section>			
		</main>
	);
}