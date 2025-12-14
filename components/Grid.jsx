import GridGlobe from "./ui/GridGlobe";

const gridItems = [
   {
      id: 1,
      title: "همکاری با مشتریان و توجه دقیق به نیازهای پروژه",
      description: "",
      className: "col-span-2 row-span-2 min-h-[50vh]",
      imgClassName: "w-full h-full",
      style: {
         background: `url(/b1.svg) no-repeat center`,
         backgroundSize: "cover",
      },
      titleClassName: "text-2xl absolute bottom-4 right-4 font-bold",
      img: "/b1.svg",
      spareImg: "",
   },
   {
      id: 2,
      title: "آماده همکاری به‌صورت ریموت، هیبرید و حضوری",
      description: "",
      className: "col-start-3",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
   },
   {
      id: 3,
      description: "در تلاش برای",
      title: "تقویت مهارت‌ها",
      className: "col-start-3 row-start-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
   },
   {
      id: 4,
      title: "علاقه‌مند به تکنولوژی و مشتاق کدنویسی",
      description: "",
      className: "col-span-2 row-start-3",
      imgClassName: "",
      titleClassName: "justify-start",
      // style: {
      //    background: `url(/grid.svg) no-repeat center`,
      //    backgroundSize: "cover",
      // },
      img: "/grid.svg",
      spareImg: "/b4.svg",
   },
   {
      id: 5,
      title: "تماس بگیرید",
      description: "آماده شرکت در توسعه و کدنویسی سایت",
      className: "col-start-3 row-start-3",
      imgClassName: "",
      titleClassName: "flex flex-col gap-4 md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
   },
];

export default function Grid() {
   return (
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
         {gridItems.map((item) => (
            <div
               key={item.id}
               className={`relative rounded-xl overflow-hidden bg-slate-950 transition-all ${item.className}`}
               style={item.style}
            >
               {item.id === 1 && (
                  <h3 className={item.titleClassName}>{item.title}</h3>
               )}
               {item.id === 2 && (
                  <div>
                     <h3 className="absolute top-4 right-4 text-xl font-bold">
                        آماده همکاری به صورت هیبرید، ریموت و حضوری
                     </h3>
                     <GridGlobe />
                  </div>
               )}
               {item.id === 3 && (
                  <div className="flex gap-4 justify-between items-stretch px-4 py-2 h-full">
                     <div className="flex flex-col items-start justify-center h-full">
                        <p className="opacity-80">{item.description}</p>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                     </div>

                     <div className="flex items-center gap-2 h-full relative">
                        <div className="flex flex-col gap-2">
                           <span className="bg-gray-800 p-2 rounded-md text-center"></span>
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              TypeScript
                           </span>
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              React
                           </span>
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              NextJS
                           </span>
                        </div>
                        <div className="flex flex-col gap-2 mt-auto">
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              Network
                           </span>
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              Vue
                           </span>
                           <span className="bg-gray-800 p-2 rounded-md text-center">
                              something
                           </span>
                           <span className="bg-gray-800 p-2 rounded-md text-center"></span>
                        </div>
                     </div>
                  </div>
               )}
               {item.id === 4 && (
                  <div>
                     <h3 className="font-bold text-2xl right-4 bottom-4 absolute">
                        {item.title}
                     </h3>
                     <img
                        src={item.spareImg}
                        className="absolute bottom-0 left-0"
                     />
                     <img
                        src={item.img}
                        alt=""
                        className="absolute w-full h-full top-0 left-0 scale-150"
                     />
                  </div>
               )}
               {item.id === 5 && (
                  <div className="flex flex-col gap-2 p-4 justify-between h-full items-center">
                     <div className="self-start">
                        <p className="opacity-80">{item.description}</p>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                     </div>

                     <a
                        href="tel:+989155706085"
                        title="تماس بگیرید"
                        className="px-16 py-2 rounded-md bg-slate-800 w-fit mt-auto active:translate-y-1 transition-all"
                     >
                        تماس
                     </a>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
}
