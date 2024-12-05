import Section from "components/Section/Section";
import Market from "./Market";

const CoctailsPage = () => {
  return (
    <div className={"container"}>
      <h1>Coctail party</h1>
      <Market />
      <Section title="My coctails">
        <h2></h2>
      </Section>
    </div>
  );
};

export default CoctailsPage;
