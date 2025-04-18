import { getBlog } from "@/lib/apiBlogs";
import { notFound } from "next/navigation";

export default async function Blog({ params }) {
	const { slug } = await params;

	const [blog] = await getBlog(slug);

	console.log(blog);

	if(!blog) notFound();

	return (
		<main>
			<h1>بلاگ</h1>
			<p>{slug}</p>
		</main>
	)
}