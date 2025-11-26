import { getBlog } from "@/lib/apiBlogs";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const [ blog ] = await getBlog(slug);

	return {
		title: `علیرضا آبچهره | وبلاگ ${blog?.title}`,
		description: `علیرضا آبچهره | وبلاگ ${blog?.intro}`,
	};
}

export default async function Blog({ params }) {
	const { slug } = await params;

	const [blog] = await getBlog(slug);

	if(!blog) notFound();

	return (
		<main>
			<h1>بلاگ</h1>
			<p>{slug}</p>
		</main>
	)
}