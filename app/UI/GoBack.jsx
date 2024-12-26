'use client';

import { useRouter } from "next/navigation";

export default function GoBack() {
	const router = useRouter();

	return (
		<button
			onClick={router.back}
			name="بازگشت"
			title="بازگشت به صفحه قبل"
			className="back-btn"
		>
			بازگشت به صفحه قبل
		</button>
	);
}