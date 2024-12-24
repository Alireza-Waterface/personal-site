import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
   title: "علیرضا آبچهره | توسعه‌دهنده فرانت‌اند",
   description: "علیرضا آبچهره | توسعه دهنده فرانت‌اند و فریلنسر | توسعه وب‌سایت با NextJS، ری‌اکت، جاوا اسکریپت و ...",
   author: 'علیرضا آبچهره',
   robots: 'index, follow',
   keywords: 'فریلنسر,علیرضا آبچهره,برنامه نویس وب,برنامه نویس فرانت اند,توسعه دهنده فرانت اند,waterface,alireza waterface,alireza abchehre,abchehre,توسعه دهنده وب,برنامه نویس سایت,آبچهره,آب چره,',
   openGraph: {
      title: "علیرضا آبچهره | توسعه‌دهنده فرانت‌اند",
      description: "علیرضا آبچهره | توسعه دهنده فرانت‌اند و فریلنسر | توسعه وب‌سایت با NextJS، ری‌اکت، جاوا اسکریپت و ...",
      url: 'https://waterface.ir',
      siteName: 'وب‌سایت شخصی علیرضا آبچهره | توسعه‌دهنده قرانت‌اند',
      locale: 'fa_IR',
      type: 'website',
      images: [ // configure for different image sizes
         {
            url: 'https://wjbwobxiekyzfcjxjnkt.supabase.co/storage/v1/object/public/me/me.png?t=2024-11-23T08%3A31%3A54.295Z',
            width: 640,
            height: 640,
            alt: 'علیرضا آبچهره',
         },
      ],
   },
};

export const viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 5,
   userScalable: false,
};

export default function RootLayout({ children }) {
   return (
      <html lang="fa-IR" dir="rtl" className="dark-mode">
         <body>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}