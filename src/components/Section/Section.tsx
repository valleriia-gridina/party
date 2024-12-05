import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  title: string;
};

const Section = ({ children, title }: TProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
