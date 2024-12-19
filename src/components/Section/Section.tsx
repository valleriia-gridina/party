import { ReactNode } from "react";
// import styles from "./Section.module.scss";

type TProps = {
  children: ReactNode;
  title: string;
};

const Section = ({ children, title }: TProps) => {
  return (
    <section
    // className={styles.section}
    >
      <h2
      // className={styles.title}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
