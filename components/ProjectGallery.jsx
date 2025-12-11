"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./projectGallery.module.css";

export default function ProjectGallery({ cover, gallery = [] }) {
   const allImages = [cover, ...gallery].filter(Boolean);

   const [activeImage, setActiveImage] = useState(allImages[0]);

   if (allImages.length === 0) return null;

   return (
      <div className={styles.container}>
         <div className={styles.mainStage}>
            <div className={styles.imageWrapper}>
               <Image
                  src={activeImage}
                  alt="Project active view"
                  fill
                  className={styles.mainImage}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
               />
            </div>
         </div>

         <div className={styles.thumbnailStrip}>
            {allImages.map((imgUrl, index) => (
               <button
                  key={index}
                  className={`${styles.thumbBtn} ${
                     activeImage === imgUrl ? styles.active : ""
                  }`}
                  onClick={() => setActiveImage(imgUrl)}
                  aria-label={`View image ${index + 1}`}
               >
                  <Image
                     src={imgUrl}
                     alt={`Thumbnail ${index + 1}`}
                     width={100}
                     height={70}
                     className={styles.thumbImg}
                  />
               </button>
            ))}
         </div>
      </div>
   );
}
