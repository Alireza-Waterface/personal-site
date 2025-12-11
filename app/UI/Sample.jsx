import Link from "next/link";

import classes from "./sample.module.css";

export default function Sample({ data }) {
   return (
      <div>
         <Link className={classes.sample} href={`/projects/${data.slug}`}>
            <div className={classes.sampleBG}>
               <img
                  src={data.cover_image}
                  alt={data.title || "تصویر پروژه"}
                  loading="lazy"
                  fetchPriority="low"
                  className={classes.img}
               />
            </div>

            <div className={classes.sampleData}>
               <p>{data.title}</p>
            </div>

            <p>
               {data.description.length > 100
                  ? data.description.slice(0, 100) + " ..."
                  : data.description.slice(0, 100)}
            </p>
         </Link>
      </div>
   );
}
