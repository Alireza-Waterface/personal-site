import { Suspense } from "react";

import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Samples from "@/components/Samples";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <Skills />
            <Suspense fallback={<div>در حال بارگیری...</div>}>
               <Samples />
            </Suspense>
            <Suspense fallback={<div>در حال بارگیری...</div>}>
               <Resume />
            </Suspense>
            <Contact />
         </main>
      </>
   );
}
