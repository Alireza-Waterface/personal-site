import { getAbout } from "@/lib/apiAbout";
import Heading from "../UI/Heading";

import classes from './header.module.css';

import { FaGitAlt, FaGithub, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default async function Header() {
	const about = await getAbout();

	console.log(about)

	return (
		<header id="header" className={classes.header}>
			<div className={classes.introduce}>
				<p className={classes.welcome}>سلام، به وب‌سایت من خوش آمدید</p>

				<Heading type='h1' size={3} className={classes.title}>
					من <span>علیرضا آبچهره</span> هستم. توسعه‌دهنده فرانت‌اند
				</Heading>

				<div className={classes.desc}>
					بیش از یک سال سابقه فعالیت در حوزه توسعه وب و به صورت تخصصی فرانت‌اند.
					<br />
					متخصص در ری‌اکت، جاوا اسکریپت و ...
					<br />
					دانشجوی کارشناسی رشته مهندسی کامپیوتر (ترم هشتم) در دانشگاه صنعتی کرمانشاه
				</div>

				<div className={classes.acquaintance}>
					<div>
						<p>شبکه‌های اجتماعی</p>
						<div className={classes.links}>
							<a
								className="link"
								rel='norefferer'
								target="_blank"
								title="لینکدین"
								href='https://www.linkedin.com/in/waterface/'
							><button name="لینکدین" title="لینکدین" className={classes.buttonIcon}><FaLinkedin style={{fill: '#0077B5'}} /></button></a>
							<a
								className="link"
								rel='norefferer'
								target="_blank"
								title="گیت‌هاب"
								href='https://github.com/Alireza-Waterface'
							><button name="گیت‌هاب" title="گیت‌هاب" className={classes.buttonIcon}><FaGithub style={{ fill: "#DDE2E6" }} /></button></a>
							<a
								className="link"
								rel='norefferer'
								target="_blank"
								title="تلگرام"
								href='https://t.me/+989155706085'
							><button name="تلگرام" title="تلگرام" className={classes.buttonIcon}><FaTelegram style={{backgroundColor: '#24A1DE', borderRadius: '50%', fill: 'var(--color-darker)'}} /></button></a>
						</div>
					</div>

					<div className={classes.skills}>
						<p>برخی مهارت‌های من</p>
						<div className={classes.buttons}>
							<button className={classes.buttonIcon} title="ری‌اکت" name="ری‌اکت"><FaReact style={{fill: '#61DBFB'}} /></button>
							<button className={classes.buttonIcon} title="جاوا اسکریپت" name="جاوا اسکریپت"><IoLogoJavascript style={{fill: '#F7DF1E'}} /></button>
							<button className={classes.buttonIcon} title="گیت" name="گیت"><FaGitAlt style={{fill: '#F1502F'}} /></button>
						</div>
					</div>
				</div>
			</div>

			<div className={classes.imageContainer}>
				<img
					src="https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me/me.webp"
					alt="تصویر علیرضا آبچهره"
				/>
			</div>
		</header>
	);
}