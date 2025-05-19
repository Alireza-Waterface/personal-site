import classes from './skills.module.css';
import Heading from '@/app/UI/Heading';

import Grid from './Grid';

export default function Skills() {
	return (
		<section id='skills' className={classes.section}>
			<p className={classes.intro}>مهارت‌های من</p>

			<Heading type='h2' className={classes.title} size={2}>معرفی و مهارت‌های من</Heading>

			<Grid />
		</section>
	);
}