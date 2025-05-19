import classes from './footer.module.css';

import { SiReact } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaPhone, FaRegCopyright, FaTelegram, FaInstagramSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<ul className={classes.list}>
				<legend>سایت‌های مرتبط</legend>

				<li className={classes.listItem}>
					<a
						className={classes.link}
						href='https://nextjs.org/'
						title='NextJS'
						referrerPolicy='no-referrer'
						rel='external'
						target='_blank'
					>NextJS</a>
				</li>
				<li className={classes.listItem}>
					<a
						className={classes.link}
						href='https://react.dev/'
						title='ReactJS'
						referrerPolicy='no-referrer'
						rel='external'
						target='_blank'
					>ReactJS</a>					
				</li>
				<li className={classes.listItem}>
					<a
						className={classes.link}
						href='https://developer.mozilla.org/en-US/'
						title='Mozilla developer network'
						referrerPolicy='no-referrer'
						rel='external'
						target='_blank'
					>MDN</a>
				</li>
				<li className={classes.listItem}>
					<a
						className={classes.link}
						href='https://vite.dev/'
						title='Vite'
						referrerPolicy='no-referrer'
						rel='external'
						target='_blank'
					>Vite</a>
				</li>
			</ul>

			<div className={classes.reactIcon}>
				<SiReact className={classes.icon} size={120} />
			</div>

			<div className={classes.list}>
				<h3>راه‌های ارتباطی</h3>

				<address className={classes.address}>
					<a
						className={classes.link}
						href='tel:+989155706085'
						title='تماس'
					>
						<FaPhone size={25} color="var(--color-primary)" />
						<span>تلفن تماس: 6085 570 0915</span>
					</a>
					<a
						className={classes.link}
						href='mailto:Alireza.waterface@outlook.com'
						title='ایمیل'
					>
						<IoIosMail size={25} color="var(--color-primary)" />
						<span>آدرس ایمیل: Alireza.waterface@outlook.com</span>
					</a>

					<div className={classes.social}>
						<a
							className={classes.link}
							href="https://linkedin.com/in/waterface"
							referrerPolicy='no-referrer'
							rel='external'
							title="لینکدین || LinkedIn"
						>
							<FaLinkedin size={45} className={classes.icon} />
						</a>

						<a
							className={classes.link}
							href="https://github.com/Alireza-Waterface"
							referrerPolicy='no-referrer'
							rel='external'
							title="گیت‌هاب || GitHub"
						>
							<FaGithub size={45} className={classes.icon} />
						</a>

						<a
							className={classes.link}
							href="https://instagram.com/waterface_ar"
							referrerPolicy='no-referrer'
							rel='external'
							title="اینستاگرام || Instagram"
						>
							<FaInstagramSquare size={45} className={classes.icon} />
						</a>

						<a 
							className={classes.link}
							href="https://wa.me/+989155706085"
							referrerPolicy='no-referrer'
							rel='external'
							title="واتس‌اپ || Whatsapp"
						>
							<IoLogoWhatsapp size={45} className={classes.icon} />
						</a>

						<a
							className={classes.link}
							href="https://t.me/+989155706085"
							referrerPolicy='no-referrer'
							rel='external'
							title="تلگرام || Telegram"
						>
							<FaTelegram size={45} className={classes.icon} />
						</a>
					</div>
				</address>
			</div>
			<div className={classes.rights}>
				تمامی حقوق سایت محفوظ است
				<FaRegCopyright />
			</div>
		</footer>
	);
}