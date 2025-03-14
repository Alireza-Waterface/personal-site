import GoBack from "@/app/UI/GoBack";
import Heading from "@/app/UI/Heading";

export default function NotFound() {
	return (
		<main className="not-found">
			<Heading type="h1" size={2}>ارور 404</Heading>
			<p>صفحه مورد نظر شما یافت نشد.</p>
			<GoBack />
		</main>
	)
}