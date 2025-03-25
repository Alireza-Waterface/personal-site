'use client';

import { useState } from "react";

import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DateObject from "react-date-object";

import classes from './url.module.css';

import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function Form({ user_id = '', userState }) {
	const [form, setForm] = useState({
		url: '',
		title: '',
		category: '',
		expire: new Date(),
	});

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	const [expireDate, setExpireDate] = useState(new Date());
	const today = new DateObject({ calendar: persian });

	const [copy, setCopy] = useState(false);

	function handleDateChange(date) {
		if(date) {
			const gregorianDate = new DateObject(date).convert('gregorian').toDate();
			setForm({ ...form, expire: gregorianDate });
		}
	}

	function handleCopy(value) {
		const linkToCopy = `https://waterface.ir/${value}`;

		if (navigator.clipboard) { // Modern Browsers
			navigator.clipboard.writeText(linkToCopy)
			.then(() => {
				handleCopySuccess();
			})
			.catch(err => setCopy('fail'));
		} else { // Fallback for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = linkToCopy;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy", true);
			document.body.removeChild(textArea);

			handleCopySuccess();
		}
		return;
	}
	function handleCopySuccess() {
		setCopy(true);
		const x = setTimeout(() => setCopy(false), 5000);
		return () => clearTimeout(x);
	}

	function handleSubmit(e) {
		e.preventDefault();

		
	}

	return (
		<>
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.formRow}>
				<label htmlFor="url">لینک</label>
				<input
					type='url'
					inputMode='url'
					id="url"
					name="url"
					className={classes.input}
					placeholder="https://www.google.com"
					value={form.url}
					onChange={handleChange}
				/>
				{/* { state?.urlMessage && <span className={classes.error}>{state.urlMessage}</span> } */}
			</div>

			<div className={classes.formRow}>
				<label htmlFor="title">عنوان</label>
				<input
					type='text'
					inputMode='text'
					id="title"
					name="title"
					className={classes.input}
					value={form.title}
					onChange={handleChange}
				/>
				{/* { state?.titleMessage && <span className={classes.error}>{state.titleMessage}</span> } */}
			</div>

			<div className={classes.formRow}>
				<label htmlFor="category">دسته‌بندی</label>
				<select
					id="category"
					name="category"
					className={classes.select}
					value={form.category}
					onChange={handleChange}
				>
					<option value='free'>رایگان - 6 کاراکتر</option>
					<option value='paid'>اختصاصی - 4 کاراکتر</option>
				</select>
			</div>

			<div className={classes.formRow}>
				<label htmlFor="expire">تاریخ انقضا</label>
				<DatePicker
					value={form.expire}
					required
					title="تاریخ انقضای لینک"
					format="YYYY/MM/DD"
					calendar={persian}
					locale={persian_fa}
					onChange={handleDateChange}
					minDate={today}
					id="expire"
					name="expire"
					style={{
						backgroundColor: 'var(--color-dark)',
						border: 'none',
						borderRadius: '7px',
						padding: '8px 12px',
						boxShadow: 'var(--inner-shadow)',
						transition: 'all 0.2s',
						width: '100%',
						height: '43px',
					}}
				/>
			</div>

			<button
				type='submit'
				className={classes.formBtn}
				disabled={userState === 'unverified'}
			>دریافت لینک کوتاه</button>

			{/* { state?.successMessage && <span className={classes.error}>{state.successMessage}</span> } */}
		</form>

		{/* { state?.link &&
			<div className={classes.linkBox}>
				{`https://waterface.ir/`}
				<button
					onClick={() => handleCopy(state.link)}
					className={classes.copyBtn}
					type='button'
				>
					{
						copy === 'fail' ? 'لینک کپی نشد!' :
						copy ? <FaCheck title="لینک کپی شد" className={classes.icon} size={30} /> : <IoCopyOutline title="کپی کردن لینک" className={classes.icon} size={30} />
					}
				</button>
			</div>
		} */}
		</>
	);
}