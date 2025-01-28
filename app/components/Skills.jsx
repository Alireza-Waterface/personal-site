import classes from './skills.module.css';
import Heading from '../UI/Heading';

import { FaGitAlt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

export default function Skills() {
	return (
		<section id='skills' className={classes.section}>
			<p className={classes.intro}>مهارت‌های من</p>

			<Heading type='h2' className={classes.title} size={2}>معرفی مهارت‌های من</Heading>

			<div className={classes.skill}>
				<FaReact size={60} className={classes.icon} />
				<p className={classes.skillTitle}>ری‌اکت</p>
				<p className={classes.skillDesc}>با تجربه توسعه پروژه‌های بزرگ و سطح بالا در ری‌اکت و تسلط بر استفاده از هوک‌ها، API و ابزارهای مرتبط، قادر به ایجاد رابط‌های کاربری پویا و بهینه هستم</p>
			</div>
			
			<div className={classes.skill}>
				<IoLogoJavascript size={60} className={classes.icon} />
				<p className={classes.skillTitle}>جاوا اسکریپت</p>
				<p className={classes.skillDesc}>تسلط بالا به جاوا اسکریپت و تجربه کار روی پروژه‌های تقریبا بزرگ و تمرینی، به من امکان می‌دهد تا با استفاده از ویژگی‌های مدرن این زبان، اپلیکیشن‌های پیچیده و مقیاس‌پذیر طراحی کنم</p>
			</div>

			<div className={classes.skill}>
				<FaGitAlt size={60} className={classes.icon} />
				<p className={classes.skillTitle}>گیت و گیت‌هاب</p>
				<p className={classes.skillDesc}>با تسلط به ابزارهای گیت و گیت‌هاب، پروژه‌های شخصی و تمرینی متعددی را مدیریت کرده‌ام. از کنترل نسخه تا مدیریت شاخه‌ها و توانایی استفاده بهینه از این ابزار را دارم</p>
			</div>
		</section>
	);
}