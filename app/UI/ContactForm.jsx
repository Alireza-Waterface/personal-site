'use client';

import { useActionState } from 'react';

import classes from './contactForm.module.css';

export default function ContactForm({ action }) {
	const [state, formAction] = useActionState(action, {});

	const { errors = {}, values = {}, attack = false } = state || {};

	if(attack) {
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

	return (
		<form className={classes.form} action={formAction}>
			<div className={classes.formRow}>
				<label htmlFor='name' className={classes.formLabel}>نام کامل <span>*</span></label>
				<input
					type="text"
					id="name"
					name='name'
          		defaultValue={values.name || ''}
					className={classes.input}
				/>
				{ errors?.name && <span className={classes.error} id='nameError'>{errors.name.message}</span> }
			</div>

			<div className={classes.formRow}>
				<label htmlFor='phone' className={classes.formLabel}>شماره تلفن <span>*</span></label>
				<input
					type="text"
					inputMode='numeric'
					id="phone"
					name='phone'
          		defaultValue={values.phone || ''}
					placeholder='09123456789'
					className={classes.input}
				/>
				{ errors?.phone && <span className={classes.error} id='phoneError'>{errors.phone.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull>
				<label htmlFor='title' className={classes.formLabel}>عنوان درخواست <span>*</span></label>
				<input
					type="text"
					id="title"
					name="title"
          		defaultValue={values.title || ''}
					placeholder='حداقل 5 کاراکتر'
					className={classes.input}
				/>
				{ errors?.title && <span className={classes.error} id='titleError'>{errors.title.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull='true'>
				<label htmlFor='description' className={classes.formLabel}>توضیحات <span>*</span></label>
				<textarea
					id="description"
					name="description"
          		defaultValue={values.description || ''}
					placeholder='حداقل 5 کاراکتر'
					className={classes.textarea}
				/>
				{ errors?.description && <span className={classes.error} id='descError'>{errors.description.message}</span> }
			</div>

			<div className={classes.formRow} data-stylefull data-styleflex>
				<button
					type='reset'
					className={classes.formBtn}
					data-styledanger
				>لغو</button>
				<button
					type='submit'
					className={classes.formBtn}
				>ثبت درخواست</button>
			</div>

			{ state.success &&
				<div className={classes.success}>
					<p>درخواست شما با موفقیت ارسال شد</p>
				</div>
			}
		</form>
	);
}