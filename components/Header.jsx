'use client';

import { motion } from 'motion/react';

import { AuroraBackground } from "./ui/aurora-background";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import classes from './header.module.css';

import { FaGitAlt, FaGithub, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Header() {
	return (
		<AuroraBackground>
      <motion.div
			initial={{ opacity: 0.0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: "easeInOut",
			}}
			viewport={{
				once: true,
			}}
			className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
			<header id="header" className={classes.header}>
				<div className={classes.introduce}>
					<p className={classes.welcome}>سلام، به وب‌سایت من خوش آمدید</p>

					<h1 className={classes.title}>
						من <span>علیرضا آبچهره</span> هستم. توسعه‌دهنده فرانت‌اند
					</h1>

					<div className={classes.desc}>
						بیش از دو سال سابقه فعالیت در حوزه توسعه وب و به صورت تخصصی فرانت‌اند.
						<br />
						متخصص در ری‌اکت، جاوا اسکریپت و ...
						<br />
						فارغ‌التحصیل مقطع کارشناسی رشته مهندسی کامپیوتر از دانشگاه صنعتی کرمانشاه
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

				<CardContainer className="inter-var">
					<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
					
					<CardItem translateZ="100" className="w-full">
						<img
							src="https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me/me.webp"
							height="1000"
							width="1000"
							className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="تصویر علیرضا آبچهره"
						/>
					</CardItem>
					</CardBody>
				</CardContainer>
			</header>        
      </motion.div>
    </AuroraBackground>
	);
}