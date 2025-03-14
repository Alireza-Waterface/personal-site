'use client';

import { verifyCode } from "@/actions/verify";
import { useActionState, useTransition } from "react";

import classes from './verify.module.css';

export default function Form({ codeID, redirectURL }) {
	const [state, formAction] = useActionState(verifyCode.bind(null, codeID, redirectURL), { message: null });

	const [isPending, startTransition] = useTransition();

	const handleSubmit = (formData) => {
		startTransition(() => {
			formAction(formData);
		});
	};

	return (
		<form action={handleSubmit} className={classes.form}>
			<div className={classes.formRow}>
				<label htmlFor="code">کد تایید</label>
				<input
					type="text"
					inputMode="numeric"
					placeholder="123456"
					name="code"
					title="کد تایید"
					required
					id="code"
					className={classes.input}
					defaultValue={state?.code}
				/>
			</div>
			{ !state.success && <p className={classes.error}>{state.message}</p> }

			<button
				type="submit"
				className={classes.formBtn}
				disabled={isPending}
			>{isPending ? 'در حال تایید...' : 'تایید'}</button>
		</form>
	);
}