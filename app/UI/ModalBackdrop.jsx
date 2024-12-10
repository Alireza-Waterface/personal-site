'use client';

import { useRouter } from "next/navigation";

import classes from './modalBackdrop.module.css';

export default function ModalBackdrop() {
	const router = useRouter();

	return <div className={classes.modalBackdrop} onClick={router.back}></div>;
}