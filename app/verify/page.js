import { verfityAuth } from "@/lib/auth";
import { getUserByID } from "@/lib/user";
import { registerCode } from "@/lib/apiVerify";
import { redirect } from "next/navigation";
import Form from "./form";
import { sendVerificationCode } from "@/actions/verify";

import classes from './verify.module.css';
import { Suspense } from "react";

export default async function Verify({ searchParams }) {
	const { redirectURL } = await searchParams;

	const result = await verfityAuth();

	if(!result.user) {
		redirect('/');
	}

	const user = await getUserByID(result.user.id);

	if(user.state === 'verified') {
		redirect('/');
	}

	const now = new Date();
	const expire = new Date(now.setMinutes(now.getMinutes() + 5));

	const codeID = await registerCode(`${now}`, user.id, `${expire}`);

	const { success, message } = await sendVerificationCode(user.email, codeID);

	return (
		<main className={classes.verify}>
			<h1 className={classes.title}>تایید ایمیل حساب</h1>

			<p className={classes.email}>{user.email}</p>

			<p className={success ? `${classes.sendCodeState} ${classes.success}` : `${classes.sendCodeState} ${classes.error}`}>{message}</p>

			<Suspense fallback={<p>در حال بارگذاری...</p>}>
				<Form codeID={codeID} redirectURL={redirectURL} />
			</Suspense>
		</main>
	);
}