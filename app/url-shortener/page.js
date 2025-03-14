import { verfityAuth } from '@/lib/auth';
import Form from './url-form';
import classes from './url.module.css';
import { redirect } from 'next/navigation';
import { getUserByID } from '@/lib/user';
import Link from 'next/link';

export const metadata = {
	title: "علیرضا آبچهره | کوتاه‌کننده لینک",
	description: "ابزار کوتاه‌کننده لینک",
	author: 'علیرضا آبچهره',
   robots: 'index, follow',
	openGraph: {
      title: "علیرضا آبچهره | کوتاه‌کننده لینک",
      description: "علیرضا آبچهره | ابزار کوتاه‌کننده لینک",
      url: 'https://waterface.ir/url-shortener',
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

export default async function UrlShortener() {
	const result = await verfityAuth();

   if(!result.user) {
      redirect('/auth?mode=login&redirectURL=url-shortener');
   }

   const user = await getUserByID(result.user.id);

	return (
		<main className={classes.shortener}>
			<h1 className={classes.title}>کوتاه‌کننده لینک</h1>
			<p className={classes.desc}>
				ابزار کوتاه‌کننده لینک قابل استفاده به صورت رایگان (6 کاراکتر) و اختصاصی (4 کاراکتر)
				<br />
				هردو مورد موقتا به صورت رایگان در دسترس هستند
			</p>

         { user.state === 'unverified' &&
            <div className={classes.state}>
               <p>حساب کاربری شما تایید نشده است. برای استفاده از این ابزار لازم است ابتدا ایمیل حساب خود را تایید کنید</p>
               <Link title='تایید حساب کاربری' href={`/verify?redirectURL=url-shortener`}>تایید حساب</Link>
            </div>
         }

			<Form userState={user.state} user_id={result?.user?.id} />
		</main>
	);
}