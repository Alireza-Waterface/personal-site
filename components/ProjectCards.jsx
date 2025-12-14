import Link from "next/link";

export default function ProjectCards({ data }) {
   return (
      <ul className=" mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-2">
         {data.slice(0, 4).map((card) => (
            <li
               key={card.id}
               className="p-2 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
               <Link
                  href={`/projects/${card.slug}`}
                  className="flex gap-4 flex-col w-full"
               >
                  <div>
                     <img
                        width={100}
                        height={100}
                        src={card.cover_image}
                        alt={card.title || "تصویر پروژه"}
                        loading="lazy"
                        fetchPriority="low"
                        className="h-60 w-full rounded-lg object-cover object-top"
                     />
                  </div>
                  <div className="flex justify-center items-center flex-col">
                     <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base">
                        {card.title}
                     </h3>
                     <p className="text-neutral-600 dark:text-neutral-400 text-justify">
                        {card.description.length > 100
                           ? card.description.slice(0, 100) + " ..."
                           : card.description.slice(0, 100)}
                     </p>
                  </div>
               </Link>
            </li>
         ))}
      </ul>
   );
}
