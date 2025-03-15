import { expand } from "@/lib/apiLinks";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import Status from "./status";

// export async function generateMetadata({ shortURL }) {
// 	const originalURL = await expand(shortURL);

// 	if(!originalURL) {
// 		return {
// 			title: 'لینک معتبر نیست',
// 			description: 'این لینک یافت نشد | لطفا لینک وارد شده را بررسی نمایید!',
// 			robots: 'noindex, nofollow',
// 		}
// 	} else {
// 		return {
// 			title: 'صفحه انتقال به سایت مورد نظر',
// 			description: 'صفحه انتقال به سایت مورد نظر | لطفا کمی صبر کنید ...',
// 			robots: 'noindex, nofollow',
// 		}
// 	}
// }

// async function RedirectHandler({ shortURL }) {
// 	const originalURL = await expand(shortURL);

// 	if(!originalURL) notFound();
	
// 	redirect(originalURL, 'replace');
// }

export default async function Page({ params }) {
	const url = await params.url;

	return (
		<main>
			{/* <Suspense fallback={<Status />}>
				<RedirectHandler shortURL={url} />
			</Suspense> */}
			<p>این قسمت به زودی فعال می‌شود</p>
		</main>
	)
}