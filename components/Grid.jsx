import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const gridItems = [
	{
		id: 1,
		title: "همکاری با مشتریان و توجه دقیق به نیازهای پروژه",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "آماده همکاری به‌صورت ریموت، هیبرید و حضوری",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		description: "در تلاش برای",
		title: "تقویت مهارت‌ها",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "علاقه‌مند به تکنولوژی و به‌دنبال کدنویسی",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},
	{
		id: 6,
		title: "قصد انجام پروژه دارید؟",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "flex flex-col gap-4 md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export default function Grid() {
	return (
		<BentoGrid className="w-full py-10 bg-black-100">
			{gridItems.map((item) => (
				<BentoGridItem
					id={item.id}
					key={item.id}
					title={item.title}
					description={item.description}
					className={item.className}
					img={item.img}
					imgClassName={item.imgClassName}
					titleClassName={item.titleClassName}
					spareImg={item.spareImg}
				/>
			))}
      </BentoGrid>
	);
}