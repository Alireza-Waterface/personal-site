'use client';

import { useTransition, useActionState, useEffect, useState } from 'react';

import classes from './contactForm.module.css';

export default function ContactForm({ action }) {
	const [state, formAction] = useActionState(action, {});
	const [formData, setFormData] = useState(state || {});

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		setFormData(state || {});
	}, [state]);

	if(formData?.attack) {
		document.querySelector('body').innerHTML = '<div style="text-align: center; font-size: 5rem; margin-top: 10rem">Suspicious Word or Character detected.</div>';
		const haha = setTimeout(() => {
			while(true) {
				alert('Close the tab!');
			}			
		}, 500);
		return () => {
			clearTimeout(haha);
		}
	}
	
	const reset = () => setFormData({});

	function handleSubmit(formData) {
		startTransition(() => {
			formAction(formData);
		})
	}

	return (
		<form className={classes.form} action={handleSubmit}>
			<div className={classes.formRow}>
				<label htmlFor='name' className={classes.formLabel}>نام کامل <span>*</span></label>
				<input
					type="text"
					id="name"
					name='name'
          		defaultValue={formData?.values?.name || ''}
					className={classes.input}
				/>
				{ formData?.errors?.name && <span className={classes.error} id='nameError'>{formData?.errors?.name.message}</span> }
			</div>

			<div className={classes.formRow}>
				<label htmlFor='phone' className={classes.formLabel}>شماره تلفن <span>*</span></label>
				<input
					type="text"
					inputMode='numeric'
					id="phone"
					name='phone'
          		defaultValue={formData?.values?.phone || ''}
					placeholder='09123456789'
					className={classes.input}
				/>
				{ formData?.errors?.phone && <span className={classes.error} id='phoneError'>{formData?.errors?.phone.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull>
				<label htmlFor='title' className={classes.formLabel}>عنوان درخواست <span>*</span></label>
				<input
					type="text"
					id="title"
					name="title"
          		defaultValue={formData?.values?.title || ''}
					placeholder='حداقل 5 کاراکتر'
					className={classes.input}
				/>
				{ formData?.errors?.title && <span className={classes.error} id='titleError'>{formData?.errors?.title.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull='true'>
				<label htmlFor='description' className={classes.formLabel}>توضیحات <span>*</span></label>
				<textarea
					id="description"
					name="description"
          		defaultValue={formData?.values?.description || ''}
					placeholder='حداقل 5 کاراکتر'
					className={classes.textarea}
				/>
				{ formData?.errors?.description && <span className={classes.error} id='descError'>{formData?.errors?.description.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull data-styleflex>
				<button
					type='reset'
					className={classes.formBtn}
					data-styledanger
					onClick={reset}
					disabled={isPending}
				>لغو</button>
				<button
					type='submit'
					className={classes.formBtn}
					disabled={isPending}
				>{ isPending ? 'در حال ارسال...' : 'ثبت درخواست' }</button>
			</div>

			{ state.success &&
				<div className={classes.success}>
					<p>درخواست شما با موفقیت ارسال شد</p>
				</div>
			}
		</form>
	);
}