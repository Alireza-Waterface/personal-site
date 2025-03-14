import { notFound } from "next/navigation";

export default async function Blog({ params }) {
	const { slug } = await params;

	notFound();

	return (
		<main>
			<h1>بلاگ</h1>
		</main>
	)
}