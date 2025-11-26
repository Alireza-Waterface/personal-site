import classes from "./skills.module.css";
import Heading from "@/app/UI/Heading";

import Grid from "./Grid";

export default function Skills() {
   return (
      <section id="skills" className={classes.section}>
         <p className={classes.intro}>توانمندی و مهارت‌ها</p>

         <Heading type="h2" className={classes.title} size={2}>
            آنچه من ارائه می‌دهم
         </Heading>

         <Grid />
      </section>
   );
}
