"use client";

import { Boxes } from "../components/ui/background-boxes";

import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import classes from "./header.module.css";

import {
   FaGitAlt,
   FaGithub,
   FaLinkedin,
   FaReact,
   FaTelegram,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Header() {
   return (
      <div className="min-h-[80vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
         <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
         <Boxes />

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
                  <p className={`${classes.welcome} z-30`}>
                     سلام، به وب‌سایت من خوش آمدید
                  </p>

                  <h1 className={`${classes.title} z-30`}>
                     من <span>علیرضا آبچهره</span> هستم. توسعه‌دهنده فرانت‌اند
                  </h1>

                  <div className={`${classes.desc} z-30 text-justify`}>
                     <p>
                        بیش از دو سال سابقه فعالیت در حوزه توسعه وب و به صورت
                        تخصصی فرانت‌اند.
                     </p>
                     <p>متخصص در ری‌اکت، جاوا اسکریپت و ...</p>
                     <p>
                        فارغ‌التحصیل مقطع کارشناسی رشته مهندسی کامپیوتر از
                        دانشگاه صنعتی کرمانشاه
                     </p>
                  </div>

                  <div className={classes.acquaintance}>
                     <div className="justify-self-start">
                        <p className="z-30">شبکه‌های اجتماعی</p>
                        <div className={classes.links}>
                           <a
                              className="link z-30"
                              rel="norefferer"
                              target="_blank"
                              title="لینکدین"
                              href="https://www.linkedin.com/in/waterface/"
                           >
                              <button
                                 name="لینکدین"
                                 title="لینکدین"
                                 className={classes.buttonIcon}
                              >
                                 <FaLinkedin style={{ fill: "#0077B5" }} />
                              </button>
                           </a>
                           <a
                              className="link z-30"
                              rel="norefferer"
                              target="_blank"
                              title="گیت‌هاب"
                              href="https://github.com/Alireza-Waterface"
                           >
                              <button
                                 name="گیت‌هاب"
                                 title="گیت‌هاب"
                                 className={classes.buttonIcon}
                              >
                                 <FaGithub style={{ fill: "#DDE2E6" }} />
                              </button>
                           </a>
                           <a
                              className="link z-30"
                              rel="norefferer"
                              target="_blank"
                              title="تلگرام"
                              href="https://t.me/+989155706085"
                           >
                              <button
                                 name="تلگرام"
                                 title="تلگرام"
                                 className={classes.buttonIcon}
                              >
                                 <FaTelegram
                                    style={{
                                       backgroundColor: "#24A1DE",
                                       borderRadius: "50%",
                                       fill: "var(--color-darker)",
                                    }}
                                 />
                              </button>
                           </a>
                        </div>
                     </div>

                     <div className={classes.skills}>
                        <p className="z-30">برخی مهارت‌های من</p>
                        <div className={classes.buttons}>
                           <button
                              className={`${classes.buttonIcon} z-30`}
                              title="ری‌اکت"
                              name="ری‌اکت"
                           >
                              <FaReact style={{ fill: "#61DBFB" }} />
                           </button>
                           <button
                              className={`${classes.buttonIcon} z-30`}
                              title="جاوا اسکریپت"
                              name="جاوا اسکریپت"
                           >
                              <IoLogoJavascript style={{ fill: "#F7DF1E" }} />
                           </button>
                           <button
                              className={`${classes.buttonIcon} z-30`}
                              title="گیت"
                              name="گیت"
                           >
                              <FaGitAlt style={{ fill: "#F1502F" }} />
                           </button>
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
      </div>
   );
}
