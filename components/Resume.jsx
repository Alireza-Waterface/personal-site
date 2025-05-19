import { getSkills } from '@/lib/apiSkills';
import classes from './resume.module.css';
import TabSelector from '@/app/UI/TabSelector';

import { MovingCards } from './ui/movingCards';

export default async function Resume() {
	const skills = await getSkills();

	if(!skills) return <div>مهارتی یافت نشد</div>;

	function level(value) {
		if(value < 40) {
			return 'کمتر از متوسط';
		} else if(value >= 40 && value < 60) {
			return 'متوسط';
		} else if(value >= 60 && value < 75) {
			return 'بالاتر از متوسط';
		} else if(value >= 75 && value < 90) {
			return 'خوب';
		} else if(value >= 90) {
			return 'خیلی خوب';
		} else {
			return 'نا مشخص';
		}
	}

	return (
		<section id="resume" className={classes.resume}>
			<p className={classes.desc}>بیش از یک سال تجربه</p>
			<h2 className={classes.title}>رزومه</h2>

			<TabSelector>
				<div className={`${classes.tabOption} ${classes.tab} tab`} data-style="active" data-tab='skills'>مهارت‌های تخصصی</div>
				<div className={`${classes.tabOption} ${classes.tab} tab`} data-tab='education'>تحصیلات</div>
			</TabSelector>

			<div className={`${classes.tabContent} ${classes.content} content`} data-name='education'>
				<div className={classes.part}>
					<p className={classes.title}>دوره متوسطه (دبیرستان)</p>
					<p className={classes.desc}>دوره متوسطه دوم در رشته علوم تجربی در خرداد ماه سال 1398 به پایان رساندم</p>
					<span className={classes.circle}></span>
					<span className={classes.line}></span>
				</div>
				<div className={classes.part}>
					<p className={classes.title}>دوره کارشناسی</p>
					<p className={classes.desc}>دوره کارشناسی پیوسته خود را در رشته مهندسی کامپیوتر در دانشگاه صنعتی کرمانشاه از مهر ماه سال 1400 آغاز کرده و تا تیر ماه سال 1404 به پایان خواهم رساند</p>
					<span className={classes.circle}></span>
					<span className={classes.line}></span>
				</div>
			</div>

			<div className={`${classes.tabContent} ${classes.content} content`} data-style='active' data-name='skills'>
				{
					skills?.map(skill => (
						<div className={classes.progress} key={skill.id} value={skill.value}>
							<div className={classes.details}>
								<span>{skill.skill}</span>
								<span>{level(skill.value)}</span>
							</div>
							<div className={classes.bar}>
								<span
									style={{
										width: `${skill.value}%`,
									}}
								></span>
							</div>
						</div>
					))
				}
				<MovingCards />
			</div>


			<a
				href='https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me//Resume.pdf'
				title='دانلود فایل رزومه'
				download
				className={classes.dlBtn}
			>
				دانلود فایل رزومه
			</a>
		</section>
	);
}